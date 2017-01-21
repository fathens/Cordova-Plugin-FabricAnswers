#!/usr/bin/env ruby

require 'rexml/document'

$PROJECT_DIR = Pathname.pwd.realpath
$PLATFORM_DIR = $PROJECT_DIR/'platforms'/'ios'

other_plugin = $PROJECT_DIR/'node_modules'/'@cordova-plugin'/'fabric-crashlytics'/'plugin.xml'
pluginxml = $PROJECT_DIR/'plugins'/'org.fathens.cordova.plugin.fabric.answers'/'plugin.xml'

if (other_plugin.exist? && pluginxml.exist?) then
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
end
