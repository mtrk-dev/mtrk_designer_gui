# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://vagrantcloud.com/search.
  config.vm.box = "bento/ubuntu-22.04"
  config.vm.provision "docker"
  config.vm.network "forwarded_port", guest: 5010, host: 5010, auto_correct: true, host_ip: "127.0.0.1"
  config.vm.network "forwarded_port", guest: 6010, host: 6010, auto_correct: true

  config.vm.provider "parallels" do |p, o|
    p.memory = "4096"
  end

  # Increase memory for Virtualbox
  config.vm.provider "virtualbox" do |vb|
        vb.memory = "4096"
  end

  # Increase memory for VMware
  ["vmware_fusion", "vmware_workstation"].each do |p|
    config.vm.provider p do |v|
      v.vmx["memsize"] = "4096"
    end
  end

  config.vm.provision "shell", inline: <<-SHELL
    set -e
    sudo apt update
    sudo apt install python3-pip -y
    cd /opt

    # If repositories are private use this section.
    # Add all the keys one by one and give them the right permissions.
    # Also add the config file which will be used to assign the right key to the repo.
    # NOTE: The keys and config file should exist in your machine for this to work.

    # cp /vagrant/.ssh/mtrk_ui* ~/.ssh && chmod 600 ~/.ssh/mtrk_ui*
    # cp /vagrant/.ssh/mtrk_sdl* ~/.ssh && chmod 600 ~/.ssh/mtrk_sdl*
    # cp /vagrant/.ssh/mtrk_viewer* ~/.ssh && chmod 600 ~/.ssh/mtrk_viewer*
    # cp /vagrant/.ssh/config ~/.ssh
    # cp /vagrant/.ssh/known_hosts ~/.ssh
    # git clone --depth 1 git@github.com-mtrk_viewer:mtrk-dev/mtrk_viewer.git
    # git clone --depth 1 git@github.com-mtrk_creation_repo:mtrk-dev/mtrk_designer_gui.git
    # cd mtrk_designer_gui/app
    # git clone --depth 1 git@github.com-mtrk_sdl_repo:mtrk-dev/mtrk_designer_api.git

    # If repositories are public use this section.

    git clone --depth 1 https://github.com/mtrk-dev/mtrk_viewer.git
    git clone --depth 1 https://github.com/mtrk-dev/mtrk_designer_gui.git
    cd mtrk_designer_gui/app
    git clone --depth 1 https://github.com/mtrk-dev/mtrk_designer_api.git

    sudo bash /opt/mtrk_designer_gui/install.sh
  SHELL

  config.trigger.after :up do |trigger|
    trigger.info = "Running host command after 'vagrant up'"
    trigger.run = { inline: "vagrant port > port_info.txt" }
    trigger.run_remote = {inline: "/opt/mtrk_designer_gui/venv/bin/python /vagrant/retrieve_port_mapping.py"}
  end

end