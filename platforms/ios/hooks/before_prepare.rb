#!/usr/bin/env ruby

require 'xcodeproj'
require 'rexml/document'

$PROJECT_DIR = Pathname.pwd.realpath
$PLATFORM_DIR = $PROJECT_DIR/'platforms'/'ios'

def plugin_xml(plugin_id)
    $PROJECT_DIR/'plugins'/plugin_id/'plugin.xml'
end

def swift_files(plugin_id)
    Pathname.glob($PLATFORM_DIR /'*'/'Plugins'/plugin_id/'**'/'*.swift')
end

def remove_answers(my_id, other_id)
    return unless plugin_xml(other_id).exist?

    pluginxml = plugin_xml my_id
    return unless pluginxml.exist?

    puts "Modify #{pluginxml}"
    xml = File.open(pluginxml) {|src| REXML::Document.new src }
    xml.get_elements('//platform[@name="ios"]').each { |platform|
        ['podfile/pod[@name="Answers"]', 'fabric/import[.="Answers"]'].each { |xpath|
            platform.get_elements(xpath).each { |e|
                puts "Deleting: #{e}"
                e.parent.delete_element e
            }
        }
    }
    File.open(pluginxml, 'w') { |dst|
        xml.write dst
    }

    swift_files(my_id).each { |file|
        tmp = "#{file}.tmp"
        File.open(file, 'r') { |src|
            File.open(tmp, 'w') { |dst|
                src.each_line { |line|
                    if line =~ /^import Answers$/
                        dst.puts "import Crashlytics"
                    else
                        dst.puts line
                    end
                }
            }
        }
        File.rename tmp, file
    }
end

remove_answers 'org.fathens.cordova.plugin.fabric.Answers', 'org.fathens.cordova.plugin.fabric.Crashlytics'
