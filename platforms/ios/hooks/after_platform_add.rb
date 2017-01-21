#!/usr/bin/env ruby

require 'xcodeproj'
require 'rexml/document'

$PROJECT_DIR = Pathname.pwd.realpath
$PLATFORM_DIR = $PROJECT_DIR/'platforms'/'ios'

def plugin_xml(plugin_id)
    $PROJECT_DIR/'plugins'/plugin_id/'plugin.xml'
end

def remove_answers(my_id, other_id)
    return unless plugin_xml(other_id).exist?

    pluginxml = plugin_xml my_id
    return unless pluginxml.exist?

    puts "Modify #{pluginxml}"
    xml = File.open(pluginxml) {|src| REXML::Document.new src }
    xml.get_elements('//platform[@name="ios"]').each { |platform|
        platform.get_elements('framework[@src="Answers"]').each { |e|
            puts "Deleting: #{e}"
            platform.delete_element e
        }
    }
    File.open(pluginxml, 'w') { |dst|
        xml.write dst
    }

    podfile = $PLATFORM_DIR/'Podfile'
    puts "Modify #{podfile}"
    lines = []
    open(podfile, 'r') { |src|
        src.each_line { |line|
            lines.push line unless line.match(/^\s*pod\s+[\'\"]Answers[\'\"]/)
        }
    }
    open(podfile, 'w') { |dst|
        dst.puts lines
    }
    Dir.chdir($PLATFORM_DIR) do
        system 'pod install'
    end
end

remove_answers 'org.fathens.cordova.plugin.fabric.answers', 'org.fathens.cordova.plugin.fabric.crashlytics'
