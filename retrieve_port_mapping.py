import json
import re

def parse_vagrant_port_output(output):
    port_mappings = {}
    pattern = re.compile(r"(\d+)\s+\(guest\)\s+=>\s+(\d+)\s+\(host\)")

    for line in output.splitlines():
        match = pattern.search(line)
        if match:
            guest_port = match.group(1)
            host_port = match.group(2)
            port_mappings[guest_port] = host_port

    return port_mappings

def save_to_json(data, filename):
    with open(filename, 'w') as json_file:
        json.dump(data, json_file, indent=4)

def main():
    file_path = '/vagrant/port_info.txt'
    with open(file_path, "r", encoding="utf-16le") as file:
        output = file.read()
    if output:
        port_mappings = parse_vagrant_port_output(output)
        print("port mappings: ")
        print(port_mappings)
        save_to_json(port_mappings, '/opt/port_mappings.json')
        print(f"Port mappings saved to port_mappings.json")
    else:
        print("Failed to get vagrant port output")

if __name__ == "__main__":
    main()