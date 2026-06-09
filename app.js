// Apps Database
const INITIAL_APPS = [
    {
        id: "vscodium",
        name: "VSCodium",
        category: "Development",
        developer: "VSCodium Team",
        shortDesc: "Free/Libre Open Source Software binaries of VS Code without MS telemetry.",
        longDesc: "VSCodium is a community-driven, freely-licensed binary distribution of Microsoft’s editor VS Code. It provides clean, out-of-the-box binaries that strip out all telemetry, tracking, and proprietary code licenses, maintaining 100% extension compatibility.",
        license: "MIT",
        version: "v1.90.1",
        downloads: 482000,
        rating: 4.9,
        repo: "https://github.com/VSCodium/vscodium",
        downloadUrl: "https://github.com/VSCodium/vscodium/releases/download/1.90.1.24165/VSCodium-x64-1.90.1.24165.msi",
        updated: "2026-05-10"
    },
    {
        id: "vlc",
        name: "VLC Media Player",
        category: "Multimedia",
        developer: "VideoLAN Association",
        shortDesc: "Versatile cross-platform multimedia player playing almost all file formats.",
        longDesc: "VLC is a free and open source cross-platform multimedia player and framework that plays most multimedia files as well as DVDs, Audio CDs, VCDs, and various streaming protocols. It contains no spyware, no ads, and no user tracking.",
        license: "GPLv2",
        version: "v3.0.21",
        downloads: 1205000,
        rating: 4.8,
        repo: "https://code.videolan.org/videolan/vlc",
        downloadUrl: "https://get.videolan.org/vlc/3.0.21/win64/vlc-3.0.21-win64.exe",
        updated: "2026-05-02"
    },
    {
        id: "obs-studio",
        name: "OBS Studio",
        category: "Multimedia",
        developer: "OBS Project Contributors",
        shortDesc: "Free and open source software for video recording and live streaming.",
        longDesc: "OBS Studio is a powerful, open-source program designed for offline video recording and live streaming. It features real-time source capturing, scene composition, encoding, recording, and broadcasting capabilities to Twitch, YouTube, and more.",
        license: "GPLv2",
        version: "v30.1.2",
        downloads: 894000,
        rating: 4.9,
        repo: "https://github.com/obsproject/obs-studio",
        downloadUrl: "https://github.com/obsproject/obs-studio/releases/download/30.1.2/OBS-Studio-30.1.2-Full-Installer-x64.exe",
        updated: "2026-04-18"
    },
    {
        id: "gimp",
        name: "GIMP",
        category: "Graphics",
        developer: "The GIMP Team",
        shortDesc: "GNU Image Manipulation Program for photo retouching, composition, and authoring.",
        longDesc: "GIMP is a cross-platform image editor available for GNU/Linux, macOS, Windows and more operating systems. It is free software, you can change its source code and distribute your changes. Perfect for photo editing, digital art design, and vector drawing.",
        license: "GPLv3",
        version: "v2.10.38",
        downloads: 612000,
        rating: 4.5,
        repo: "https://gitlab.gnome.org/GNOME/gimp",
        downloadUrl: "https://download.gimp.org/pub/gimp/v2.10/windows/gimp-2.10.38-setup.exe",
        updated: "2026-05-05"
    },
    {
        id: "blender",
        name: "Blender 3D",
        category: "Graphics",
        developer: "Blender Foundation",
        shortDesc: "Open-source 3D creation suite supporting modeling, animation, rendering, and simulation.",
        longDesc: "Blender is the free and open source 3D creation suite. It supports the entirety of the 3D pipeline—modeling, rigging, animation, simulation, rendering, compositing and motion tracking, video editing and 2D animation pipeline.",
        license: "GPLv3",
        version: "v4.1.1",
        downloads: 954000,
        rating: 4.9,
        repo: "https://projects.blender.org/blender/blender",
        downloadUrl: "https://ftp.nluug.nl/pub/graphics/blender/release/Blender4.1/blender-4.1.1-windows-x64.msi",
        updated: "2026-04-20"
    },
    {
        id: "brave",
        name: "Brave Browser",
        category: "Security",
        developer: "Brave Software Inc.",
        shortDesc: "Privacy-focused web browser blocking trackers and ads automatically.",
        longDesc: "Brave is a free and open-source web browser developed by Brave Software, Inc. based on the Chromium web browser. Brave blocks ads and website trackers by default, offering enhanced speed, bandwidth savings, and state-of-the-art privacy protection.",
        license: "MPLv2",
        version: "v1.66.115",
        downloads: 1050000,
        rating: 4.7,
        repo: "https://github.com/brave/brave-browser",
        downloadUrl: "https://laptop-updates.brave.com/latest/winx64",
        updated: "2026-05-20"
    },
    {
        id: "libreoffice",
        name: "LibreOffice",
        category: "Productivity",
        developer: "The Document Foundation",
        shortDesc: "Powerful office suite compatible with MS Office formats.",
        longDesc: "LibreOffice is a free, power-packed open-source personal productivity suite for Windows, Macintosh and Linux. It includes word processing, spreadsheets, presentations, drawing, database management, and formula editing tools, reading and writing MS Office files flawlessly.",
        license: "MPLv2",
        version: "v24.2.3",
        downloads: 730000,
        rating: 4.6,
        repo: "https://git.libreoffice.org/core",
        downloadUrl: "https://download.documentfoundation.org/libreoffice/stable/24.2.3/win/x86_64/LibreOffice_24.2.3_Win_x86-64.msi",
        updated: "2026-04-30"
    },
    {
        id: "audacity",
        name: "Audacity",
        category: "Multimedia",
        developer: "Muse Group & Contributors",
        shortDesc: "Easy-to-use, multi-track audio editor and recorder.",
        longDesc: "Audacity is an easy-to-use, multi-track audio editor and recorder for Windows, macOS, GNU/Linux and other operating systems. It is open source, letting you record live audio, convert tapes and records, edit sound files, and cut/splice sounds.",
        license: "GPLv2+",
        version: "v3.5.1",
        downloads: 540000,
        rating: 4.7,
        repo: "https://github.com/audacity/audacity",
        downloadUrl: "https://github.com/audacity/audacity/releases/download/Audacity-3.5.1/audacity-win-3.5.1-64bit.exe",
        updated: "2026-05-15"
    },
    {
        id: "sharex",
        name: "ShareX",
        category: "Utilities",
        developer: "ShareX Developers",
        shortDesc: "Screen capture, file sharing and productivity tool.",
        longDesc: "ShareX is a free and open source program that lets you capture or record any area of your screen and share it with a single press of a key. It also allows uploading images, text or other files to over 80 supported destinations.",
        license: "GPLv3",
        version: "v16.1.0",
        downloads: 420000,
        rating: 4.8,
        repo: "https://github.com/ShareX/ShareX",
        downloadUrl: "https://github.com/ShareX/ShareX/releases/download/v16.1.0/ShareX-16.1.0-setup.exe",
        updated: "2026-05-12"
    },
    {
        id: "krita",
        name: "Krita",
        category: "Graphics",
        developer: "Krita Foundation",
        shortDesc: "Professional painting program for concept artists, illustrators, and matte painters.",
        longDesc: "Krita is a professional free and open source painting program. It is made by artists that want to see affordable art tools for everyone. Ideal for concept art, texture and matte painters, illustrations, and comics.",
        license: "GPLv3",
        version: "v5.2.2",
        downloads: 380000,
        rating: 4.8,
        repo: "https://github.com/KDE/krita",
        downloadUrl: "https://download.kde.org/stable/krita/5.2.2/krita-x64-5.2.2-setup.exe",
        updated: "2026-04-10"
    },
    {
        id: "7zip",
        name: "7-Zip",
        category: "Utilities",
        developer: "Igor Pavlov",
        shortDesc: "Utility for compressing and decompressing files with high compression ratio.",
        longDesc: "7-Zip is a free and open source file archiver with a high compression ratio. It supports packing and unpacking of 7z, ZIP, GZIP, BZIP2 and TAR, and unpacking of ARJ, CAB, CHM, CPIO, DEB, DMG, ISO, LZH, RAR, RPM, MSI, and NSIS.",
        license: "GNU LGPL",
        version: "v24.05",
        downloads: 990000,
        rating: 4.8,
        repo: "https://github.com/ipavlov/7zip",
        downloadUrl: "https://www.7-zip.org/a/7z2405-x64.exe",
        updated: "2026-05-14"
    },
    {
        id: "rufus",
        name: "Rufus",
        category: "Utilities",
        developer: "Pete Batard",
        shortDesc: "Utility that helps format and create bootable USB flash drives.",
        longDesc: "Rufus is a utility that helps format and create bootable USB flash drives, such as USB keys/pendrives, memory sticks, etc. It is especially useful for creating USB installation media from bootable ISOs (Windows, Linux, UEFI, etc.) or flashing BIOS.",
        license: "GPLv3",
        version: "v4.5",
        downloads: 850000,
        rating: 4.9,
        repo: "https://github.com/pbatard/rufus",
        downloadUrl: "https://github.com/pbatard/rufus/releases/download/v4.5/rufus-4.5.exe",
        updated: "2026-05-18"
    },
    {
        id: "firefox",
        name: "Mozilla Firefox",
        category: "Security",
        developer: "Mozilla Foundation",
        shortDesc: "Fast, private, and secure web browser protecting your online presence.",
        longDesc: "Mozilla Firefox is a free and open-source web browser developed by the Mozilla Foundation. It is designed to protect your privacy and offers thousands of customization options, tracking protection, and robust security features.",
        license: "MPL 2.0",
        version: "v126.0",
        downloads: 1520000,
        rating: 4.8,
        repo: "https://hg.mozilla.org/mozilla-central",
        downloadUrl: "https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US",
        updated: "2026-05-18"
    },
    {
        id: "keepassxc",
        name: "KeePassXC",
        category: "Security",
        developer: "KeePassXC Team",
        shortDesc: "Cross-platform community-driven port of KeePass password manager.",
        longDesc: "KeePassXC is a modern, secure, and open-source password manager that stores your passwords locally. It encrypts all passwords using AES-256 and provides features like auto-type, browser integration, and generator.",
        license: "GPLv2/v3",
        version: "v2.7.8",
        downloads: 340000,
        rating: 4.9,
        repo: "https://github.com/keepassxreboot/keepassxc",
        downloadUrl: "https://github.com/keepassxreboot/keepassxc/releases/download/2.7.8/KeePassXC-2.7.8-Win64.msi",
        updated: "2026-05-01"
    },
    {
        id: "thunderbird",
        name: "Mozilla Thunderbird",
        category: "Productivity",
        developer: "MZLA Technologies",
        shortDesc: "Free and open-source email, newsroom, chat, and calendar client.",
        longDesc: "Thunderbird is a free and open-source email, newsgroup, RSS, and chat client developed by Mozilla. It gives you control and ownership over your emails and supports complex filtering, multiple account management, and extensions.",
        license: "MPL 2.0",
        version: "v115.11.0",
        downloads: 490000,
        rating: 4.7,
        repo: "https://hg.mozilla.org/comm-central",
        downloadUrl: "https://download.mozilla.org/?product=thunderbird-latest-ssl&os=win64&lang=en-US",
        updated: "2026-05-14"
    },
    {
        id: "qbittorrent",
        name: "qBittorrent",
        category: "Utilities",
        developer: "The qBittorrent Project",
        shortDesc: "Free and open-source BitTorrent client written in C++.",
        longDesc: "qBittorrent is an open-source alternative to uTorrent, offering a clean, ad-free user interface. It features integrated search engines, sequential downloading, bandwidth scheduling, and remote management.",
        license: "GPLv2",
        version: "v4.6.5",
        downloads: 950000,
        rating: 4.8,
        repo: "https://github.com/qbittorrent/qBittorrent",
        downloadUrl: "https://sourceforge.net/projects/qbittorrent/files/qbittorrent-win32/qbittorrent-4.6.5/qbittorrent_4.6.5_x64_setup.exe/download",
        updated: "2026-05-16"
    },
    {
        id: "inkscape",
        name: "Inkscape",
        category: "Graphics",
        developer: "Inkscape Project",
        shortDesc: "Professional vector graphics editor for design and illustration.",
        longDesc: "Inkscape is a professional vector graphics editor for Windows, Mac OS X and Linux. It is open-source and conforms to the SVG standard. It provides flexible drawing tools, advanced path operations, and rich text support.",
        license: "GPLv3",
        version: "v1.3.2",
        downloads: 580000,
        rating: 4.7,
        repo: "https://gitlab.com/inkscape/inkscape",
        downloadUrl: "https://inkscape.org/gallery/item/44422/inkscape-1.3.2_2023-11-25_091e20e-x64.msi",
        updated: "2026-04-12"
    },
    {
        id: "handbrake",
        name: "HandBrake",
        category: "Multimedia",
        developer: "HandBrake Team",
        shortDesc: "Tool for converting video from nearly any format to modern codecs.",
        longDesc: "HandBrake is an open-source, GPL-licensed, multiplatform, multithreaded video transcoder. It converts video from nearly any format to a selection of modern, widely supported codecs (MP4, MKV, WebM, etc.).",
        license: "GPLv2",
        version: "v1.7.3",
        downloads: 670000,
        rating: 4.8,
        repo: "https://github.com/HandBrake/HandBrake",
        downloadUrl: "https://github.com/HandBrake/HandBrake/releases/download/1.7.3/HandBrake-1.7.3-x86_64-Win_GUI.exe",
        updated: "2026-04-22"
    },
    {
        id: "notepadpp",
        name: "Notepad++",
        category: "Development",
        developer: "Don Ho",
        shortDesc: "Free source code editor and Notepad replacement.",
        longDesc: "Notepad++ is a free source code editor and Notepad replacement that supports several languages. Running in the MS Windows environment, its use is governed by GPL License. It uses a super-fast rendering engine and requires minimal CPU overhead.",
        license: "GPLv3",
        version: "v8.6.7",
        downloads: 1150000,
        rating: 4.8,
        repo: "https://github.com/notepad-plus-plus/notepad-plus-plus",
        downloadUrl: "https://github.com/notepad-plus-plus/notepad-plus-plus/releases/download/v8.6.7/npp.8.6.7.Installer.x64.exe",
        updated: "2026-05-11"
    },
    {
        id: "git",
        name: "Git Version Control",
        category: "Development",
        developer: "Git Contributors",
        shortDesc: "Fast, scalable, distributed revision control system.",
        longDesc: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. It is easy to learn and has a tiny footprint with lightning fast performance.",
        license: "GPLv2",
        version: "v2.45.1",
        downloads: 1450000,
        rating: 4.9,
        repo: "https://github.com/git/git",
        downloadUrl: "https://github.com/git-for-windows/git/releases/download/v2.45.1.windows.1/Git-2.45.1-64-bit.exe",
        updated: "2026-05-15"
    },
    {
        id: "kodi",
        name: "Kodi Media Center",
        category: "Multimedia",
        developer: "Kodi Foundation",
        shortDesc: "Free and open-source media player software application.",
        longDesc: "Kodi is a free and open-source media player software application developed by the Kodi Foundation. It allows users to play and view most streaming media, such as videos, music, podcasts, and videos from the Internet, as well as all common digital media files from local and network storage media.",
        license: "GPLv2+",
        version: "v21.0",
        downloads: 820000,
        rating: 4.7,
        repo: "https://github.com/xbmc/xbmc",
        downloadUrl: "https://mirrors.kodi.tv/releases/windows/win64/kodi-21.0-Nexus-x64.exe",
        updated: "2026-04-06"
    },
    {
        id: "torbrowser",
        name: "Tor Browser",
        category: "Security",
        developer: "The Tor Project",
        shortDesc: "Protect your privacy and defend yourself against network surveillance.",
        longDesc: "Tor Browser is free and open-source software that enables anonymous communication. It directs Internet traffic through a free, worldwide, volunteer overlay network to conceal a user's location and usage from anyone conducting network surveillance or traffic analysis.",
        license: "BSD 3-clause",
        version: "v13.0.15",
        downloads: 1120000,
        rating: 4.8,
        repo: "https://gitlab.torproject.org/tpo/applications/tor-browser",
        downloadUrl: "https://www.torproject.org/dist/torbrowser/13.0.15/torbrowser-install-win64-13.0.15_ALL.exe",
        updated: "2026-05-10"
    },
    {
        id: "wireshark",
        name: "Wireshark",
        category: "Security",
        developer: "The Wireshark Team",
        shortDesc: "The world's foremost and widely-used network protocol analyzer.",
        longDesc: "Wireshark is a free and open-source packet analyzer. It is used for network troubleshooting, analysis, software and communications protocol development, and education. It lets you see what's happening on your network at a microscopic level.",
        license: "GPLv2",
        version: "v4.2.5",
        downloads: 680000,
        rating: 4.9,
        repo: "https://gitlab.com/wireshark/wireshark",
        downloadUrl: "https://1.na.dl.wireshark.org/win64/Wireshark-win64-4.2.5.exe",
        updated: "2026-05-08"
    },
    {
        id: "freecad",
        name: "FreeCAD",
        category: "Graphics",
        developer: "FreeCAD Community",
        shortDesc: "Open-source parametric 3D modeler to design real-life objects.",
        longDesc: "FreeCAD is a general-purpose parametric 3D CAD modeler and a building information modeling (BIM) software with finite-element-method (FEM) support. Parametric modeling allows you to easily modify your design by going back into history and changing parameters.",
        license: "LGPLv2+",
        version: "v0.21.2",
        downloads: 420000,
        rating: 4.6,
        repo: "https://github.com/FreeCAD/FreeCAD",
        downloadUrl: "https://github.com/FreeCAD/FreeCAD/releases/download/0.21.2/FreeCAD-0.21.2-Py310-XZ-x86_64-W7-installer.exe",
        updated: "2026-03-24"
    },
    {
        id: "godot",
        name: "Godot Engine",
        category: "Development",
        developer: "Godot Contributors",
        shortDesc: "Free and open-source 2D and 3D game engine.",
        longDesc: "Godot Engine is a free, all-in-one, cross-platform game engine that makes it easy for you to create 2D and 3D games. It provides a huge set of common tools, so you can just focus on making your game without reinventing the wheel.",
        license: "MIT",
        version: "v4.2.2",
        downloads: 710000,
        rating: 4.9,
        repo: "https://github.com/godotengine/godot",
        downloadUrl: "https://github.com/godotengine/godot/releases/download/4.2.2-stable/Godot_v4.2.2-stable_win64.exe.zip",
        updated: "2026-04-18"
    },
    {
        id: "calibre",
        name: "Calibre e-Book",
        category: "Productivity",
        developer: "Kovid Goyal",
        shortDesc: "Free and open-source e-book library management application.",
        longDesc: "Calibre is a powerful and easy to use e-book manager. It allows you to do nearly everything and it takes things a step beyond normal e-book software. It is also a library manager, ebook converter, reader, editor, and news downloader.",
        license: "GPLv3",
        version: "v7.11.0",
        downloads: 540000,
        rating: 4.8,
        repo: "https://github.com/kovidgoyal/calibre",
        downloadUrl: "https://download.calibre-ebook.com/7.11.0/calibre-64bit-7.11.0.msi",
        updated: "2026-05-12"
    },
    {
        id: "transmission",
        name: "Transmission",
        category: "Utilities",
        developer: "Transmission Project",
        shortDesc: "Fast, easy, and free BitTorrent client.",
        longDesc: "Transmission is a lightweight BitTorrent client with a simple, ad-free interface. It features low memory footprint, encryption, tracker editing, and remote control capabilities. Designed for fast and robust file downloads.",
        license: "GPLv2/v3",
        version: "v4.0.5",
        downloads: 490000,
        rating: 4.7,
        repo: "https://github.com/transmission/transmission",
        downloadUrl: "https://github.com/transmission/transmission/releases/download/4.0.5/transmission-4.0.5-x64.msi",
        updated: "2026-02-10"
    },
    {
        id: "bleachbit",
        name: "BleachBit",
        category: "Utilities",
        developer: "Andrew Ziem",
        shortDesc: "Quickly frees disk space and tirelessly guards your privacy.",
        longDesc: "BleachBit quickly frees disk space and guards your privacy. It frees cache, deletes cookies, clears Internet history, shreds temporary files, deletes logs, and discards junk you didn't know was there. Supports advanced wiping functions.",
        license: "GPLv3",
        version: "v4.6.0",
        downloads: 380000,
        rating: 4.6,
        repo: "https://github.com/bleachbit/bleachbit",
        downloadUrl: "https://download.bleachbit.org/BleachBit-4.6.0-setup.exe",
        updated: "2026-03-01"
    },
    {
        id: "filezilla",
        name: "FileZilla",
        category: "Development",
        developer: "Tim Kosse",
        shortDesc: "Fast and reliable FTP, FTPS and SFTP client.",
        longDesc: "FileZilla Client is a fast and reliable cross-platform FTP, FTPS and SFTP client with lots of useful features and an intuitive graphical user interface. It supports drag & drop, directory comparison, and speed limits.",
        license: "GPLv2",
        version: "v3.67.0",
        downloads: 1120000,
        rating: 4.7,
        repo: "https://svn.filezilla-project.org/svn/FileZilla3",
        downloadUrl: "https://download.filezilla-project.org/client/FileZilla_3.67.0_win64-setup.exe",
        updated: "2026-05-05"
    },
    {
        id: "sweethome3d",
        name: "Sweet Home 3D",
        category: "Graphics",
        developer: "Emmanuel Puybaret",
        shortDesc: "Interior design application to draw and plan house spaces.",
        longDesc: "Sweet Home 3D is a free interior design application that helps you draw the plan of your house, arrange furniture on it and visit the results in 3D. It features an interactive catalog, photo rendering, and video walk-through creation.",
        license: "GPLv2+",
        version: "v7.3",
        downloads: 290000,
        rating: 4.5,
        repo: "https://sourceforge.net/p/sweethome3d/code/",
        downloadUrl: "https://sourceforge.net/projects/sweethome3d/files/SweetHome3D/SweetHome3D-7.3/SweetHome3D-7.3-windows.exe/download",
        updated: "2026-04-10"
    },
    {
        id: "veracrypt",
        name: "VeraCrypt",
        category: "Security",
        developer: "IDRIX",
        shortDesc: "Free open-source disk encryption software.",
        longDesc: "VeraCrypt is a free open-source disk encryption software. It adds enhanced security to the algorithms used for system and partitions encryption making it immune to new developments in brute-force attacks. It can create a virtual encrypted disk within a file.",
        license: "Apache 2.0 / VeraCrypt",
        version: "v1.26.7",
        downloads: 460000,
        rating: 4.9,
        repo: "https://github.com/veracrypt/VeraCrypt",
        downloadUrl: "https://launchpad.net/veracrypt/trunk/1.26.7/+download/VeraCrypt%20Setup%201.26.7.exe",
        updated: "2026-03-15"
    },
    {
        id: "winscp",
        name: "WinSCP",
        category: "Development",
        developer: "Martin Přikryl",
        shortDesc: "Popular free SFTP and FTP client for Windows.",
        longDesc: "WinSCP is a popular free SFTP and FTP client for Windows, a powerful file manager that will improve your productivity. It copies files between a local and remote computer using multiple protocols (SFTP, FTP, WebDAV, S3, SCP).",
        license: "GPLv3",
        version: "v6.3.3",
        downloads: 880000,
        rating: 4.8,
        repo: "https://github.com/winscp/winscp",
        downloadUrl: "https://winscp.net/download/WinSCP-6.3.3-Setup.exe",
        updated: "2026-04-16"
    },
    {
        id: "putty",
        name: "PuTTY",
        category: "Development",
        developer: "Simon Tatham",
        shortDesc: "SSH and telnet client for Windows and Unix.",
        longDesc: "PuTTY is a free and open-source terminal emulator, serial console and network file transfer application. It supports several network protocols, including SCP, SSH, Telnet, rlogin, and raw socket connection. Ideal for remote terminal access.",
        license: "MIT",
        version: "v0.81",
        downloads: 1340000,
        rating: 4.8,
        repo: "https://git.tartarus.org/?p=simon/putty.git",
        downloadUrl: "https://the.earth.li/~sgtatham/putty/latest/w64/putty-64bit-0.81-installer.msi",
        updated: "2026-04-15"
    },
    {
        id: "mpchc",
        name: "MPC-HC Player",
        category: "Multimedia",
        developer: "clsid2 & Contributors",
        shortDesc: "Extremely lightweight, open source media player for Windows.",
        longDesc: "Media Player Classic Home Cinema (MPC-HC) is an extremely lightweight, open source media player for Windows. It supports all common video and audio file formats available for playback. It is 100% spyware free, there are no advertisements or toolbars.",
        license: "GPLv3",
        version: "v2.2.1",
        downloads: 560000,
        rating: 4.8,
        repo: "https://github.com/clsid2/mpc-hc",
        downloadUrl: "https://github.com/clsid2/mpc-hc/releases/download/2.2.1/MPC-HC.2.2.1.x64.exe",
        updated: "2026-04-30"
    },
    {
        id: "neovim",
        name: "Neovim Editor",
        category: "Development",
        developer: "Neovim Contributors",
        shortDesc: "Vim-fork focused on extensibility and usability.",
        longDesc: "Neovim is a refactor, and driver for Vim, built to maximize extensibility. It supports fully asynchronous plugins, modern GUI integrations, embedded terminal execution, and a powerful Lua scripting engine for extreme developer efficiency.",
        license: "Apache 2.0 / Vim",
        version: "v0.10.0",
        downloads: 420000,
        rating: 4.9,
        repo: "https://github.com/neovim/neovim",
        downloadUrl: "https://github.com/neovim/neovim/releases/download/v0.10.0/nvim-win64.msi",
        updated: "2026-05-15"
    },
    {
        id: "gnucash",
        name: "GnuCash",
        category: "Productivity",
        developer: "The GnuCash Project",
        shortDesc: "Personal and small-business financial-accounting software.",
        longDesc: "GnuCash is personal and small-business financial-accounting software, freely licensed under the GNU GPL. It is designed to be easy to use, yet powerful and flexible. GnuCash allows you to track bank accounts, stocks, income and expenses.",
        license: "GPLv2/v3",
        version: "v5.6",
        downloads: 240000,
        rating: 4.5,
        repo: "https://github.com/Gnucash/gnucash",
        downloadUrl: "https://github.com/Gnucash/gnucash/releases/download/5.6/gnucash-5.6-setup.exe",
        updated: "2026-03-31"
    },
    {
        id: "virtualbox",
        name: "Oracle VirtualBox",
        category: "Development",
        developer: "Oracle Corporation",
        shortDesc: "Powerful x86 and AMD64/Intel64 virtualization product.",
        longDesc: "VirtualBox is a powerful x86 and AMD64/Intel64 virtualization product for enterprise as well as home use. It is a highly feature rich, high performance product under the GNU General Public License (GPL) version 3.",
        license: "GPLv3",
        version: "v7.0.18",
        downloads: 1150000,
        rating: 4.7,
        repo: "https://www.virtualbox.org/svn/vbox/trunk",
        downloadUrl: "https://download.virtualbox.org/virtualbox/7.0.18/VirtualBox-7.0.18-162903-Win.exe",
        updated: "2026-05-02"
    },
    {
        id: "geany",
        name: "Geany IDE",
        category: "Development",
        developer: "Geany Authors",
        shortDesc: "Small and lightweight Integrated Development Environment.",
        longDesc: "Geany is a powerful, stable and lightweight programmer's text editor that provides tons of useful features without bogging down your workflow. It runs on Windows, Linux, macOS, BSD, and supports syntax highlighting, code folding, and symbol lists.",
        license: "GPLv2+",
        version: "v2.0",
        downloads: 180000,
        rating: 4.6,
        repo: "https://github.com/geany/geany",
        downloadUrl: "https://download.geany.org/geany-2.0_setup.exe",
        updated: "2026-04-05"
    },
    {
        id: "pdfsam",
        name: "PDFsam Basic",
        category: "Productivity",
        developer: "Andrea Vacondio",
        shortDesc: "Free desktop application to split, merge, rotate PDF files.",
        longDesc: "PDFsam Basic is a free, open-source and cross-platform desktop application designed to split, merge, extract pages, rotate and mix PDF documents. It is a lightweight tool with a simple UI that executes all PDF actions locally on your computer.",
        license: "GPLv3",
        version: "v5.2.2",
        downloads: 310000,
        rating: 4.6,
        repo: "https://github.com/torakiki/pdfsam",
        downloadUrl: "https://github.com/torakiki/pdfsam/releases/download/v5.2.2/pdfsam-v5.2.2.msi",
        updated: "2026-03-20"
    },
    {
        id: "etcher",
        name: "balenaEtcher",
        category: "Utilities",
        developer: "Balena",
        shortDesc: "Flash OS images to SD cards & USB drives, safely and easily.",
        longDesc: "Etcher is a free and open-source utility used for writing image files such as .iso and .img files, as well as zipped folders, onto storage media to create live SD cards and USB flash drives. It protects you from accidentally writing to your hard drives.",
        license: "Apache 2.0",
        version: "v1.19.21",
        downloads: 780000,
        rating: 4.8,
        repo: "https://github.com/balena-io/etcher",
        downloadUrl: "https://github.com/balena-io/etcher/releases/download/v1.19.21/balenaEtcher-Setup-1.19.21.exe",
        updated: "2026-05-14"
    },
    {
        id: "rubrowser",
        name: "RU Browser",
        category: "Security",
        developer: "MyRuhi",
        shortDesc: "A fast, lightweight, and user-friendly web browser designed for privacy and speed.",
        longDesc: "RU Browser is a lightweight, privacy-focused desktop web browser built for clean and rapid browsing. It provides optimized page loading, reduced RAM usage, security filters, and an intuitive minimalist design for a modern internet experience.",
        license: "GPLv3",
        version: "v1.2.0",
        downloads: 12500,
        rating: 4.8,
        downloadUrl: "https://github.com/Rijussj/my-website/releases/download/v1.2.0/RUBrowserSetup.exe",
        updated: "2026-05-24"
    },
    {
        id: "bitwarden",
        name: "Bitwarden",
        category: "Security",
        developer: "Bitwarden Inc.",
        shortDesc: "Secure, open-source password manager for storing credentials and sensitive data.",
        longDesc: "Bitwarden is a free and open-source password management service that stores sensitive information such as website credentials in an encrypted vault. It secures your data with end-to-end AES-256 encryption, offers a secure password generator, and syncs across all devices.",
        license: "GPLv3",
        version: "v2024.4.1",
        downloads: 1450000,
        rating: 4.9,
        repo: "https://github.com/bitwarden/clients",
        downloadUrl: "https://github.com/bitwarden/clients/releases/download/desktop-v2024.4.1/Bitwarden-Installer-2024.4.1.exe",
        updated: "2026-05-18"
    },
    {
        id: "ventoy",
        name: "Ventoy",
        category: "Utilities",
        developer: "Ventoy Team",
        shortDesc: "New bootable USB solution to run ISO/WIM/IMG/VHD(x)/EFI files directly.",
        longDesc: "Ventoy is an open-source tool to create bootable USB drives for ISO/WIM/IMG/VHD(x)/EFI files. With Ventoy, you don't need to format the disk over and over, you just need to copy the files to the USB drive and boot them directly. You can copy many files at a time and Ventoy will give you a boot menu to select them.",
        license: "GPLv3",
        version: "v1.0.99",
        downloads: 880000,
        rating: 4.9,
        repo: "https://github.com/ventoy/Ventoy",
        downloadUrl: "https://github.com/ventoy/Ventoy/releases/download/v1.0.99/ventoy-1.0.99-windows.zip",
        updated: "2026-05-20"
    },
    {
        id: "joplin",
        name: "Joplin",
        category: "Productivity",
        developer: "Laurent Cozic",
        shortDesc: "Secure, open-source note-taking and to-do application with synchronization.",
        longDesc: "Joplin is a free, open-source note-taking and to-do application, which can handle a large number of notes organized into notebooks. The notes are searchable, can be copied, tagged and modified either from the applications directly or from your own text editor. The notes are in Markdown format and support End-to-End Encryption (E2EE).",
        license: "AGPLv3",
        version: "v3.0.1",
        downloads: 410000,
        rating: 4.8,
        repo: "https://github.com/laurent22/joplin",
        downloadUrl: "https://github.com/laurent22/joplin/releases/download/v3.0.1/Joplin-Setup-3.0.1.exe",
        updated: "2026-05-15"
    },
    {
        id: "rustdesk",
        name: "RustDesk",
        category: "Utilities",
        developer: "RustDesk contributors",
        shortDesc: "Open-source remote desktop client, a secure alternative to TeamViewer.",
        longDesc: "RustDesk is a full-featured open-source remote control and remote desktop software written in Rust. It works out of the box with no configuration required. You have full control of your data, with no security concerns, allowing you to use public rendezvous/relay servers or host your own.",
        license: "AGPLv3",
        version: "v1.2.3-2",
        downloads: 620000,
        rating: 4.8,
        repo: "https://github.com/rustdesk/rustdesk",
        downloadUrl: "https://github.com/rustdesk/rustdesk/releases/download/1.2.3-2/rustdesk-1.2.3-2-x86_64.exe",
        updated: "2026-05-24"
    },
    {
        id: "localsend",
        name: "LocalSend",
        category: "Utilities",
        developer: "LocalSend Team",
        shortDesc: "An open-source cross-platform sharing app for sending files locally without internet.",
        longDesc: "LocalSend is a free, open-source application that allows you to securely share files and messages with nearby devices over your local area network (LAN) without needing an internet connection. It works cross-platform across Windows, macOS, Linux, iOS, and Android.",
        license: "MIT",
        version: "v1.14.0",
        downloads: 350000,
        rating: 4.9,
        repo: "https://github.com/localsend/localsend",
        downloadUrl: "https://github.com/localsend/localsend/releases/download/v1.14.0/LocalSend-1.14.0-windows-x86-64.exe",
        updated: "2026-05-22"
    },
    {
        id: "kdenlive",
        name: "Kdenlive",
        category: "Multimedia",
        developer: "KDE Community",
        shortDesc: "Free and open-source non-linear video editor based on the MLT Framework.",
        longDesc: "Kdenlive is a powerful non-linear video editor, integrated with the KDE ecosystem. It supports dual video monitors, a multi-track timeline, clip list, customizable layout support, basic effects, and transitions. It can edit almost any audio/video format.",
        license: "GPLv3",
        version: "v24.02.2",
        downloads: 280000,
        rating: 4.7,
        repo: "https://invent.kde.org/multimedia/kdenlive",
        downloadUrl: "https://download.kde.org/stable/kdenlive/24.02.2/windows/kdenlive-24.02.2.exe",
        updated: "2026-04-25"
    },
    {
        id: "prusaslicer",
        name: "PrusaSlicer",
        category: "Graphics",
        developer: "Prusa Research",
        shortDesc: "Feature-rich, open-source 3D print slicing software based on Slic3r.",
        longDesc: "PrusaSlicer is an open-source 3D printer slicing tool designed by Prusa Research. It takes 3D models (STL, OBJ, 3MF) and converts them into G-code instructions for 3D printers. It features multi-material printing support, organic supports, and custom print settings.",
        license: "GPLv3",
        version: "v2.7.4",
        downloads: 310000,
        rating: 4.9,
        repo: "https://github.com/prusa3d/PrusaSlicer",
        downloadUrl: "https://github.com/prusa3d/PrusaSlicer/releases/download/version_2.7.4/PrusaSlicer-2.7.4+win64-202404051016_signed.exe",
        updated: "2026-04-05"
    },
    {
        id: "sumatrapdf",
        name: "SumatraPDF",
        category: "Productivity",
        developer: "Krzysztof Kowalczyk",
        shortDesc: "Extremely lightweight, open-source PDF, ePub, MOBI, and XPS reader.",
        longDesc: "SumatraPDF is a free, open-source and very lightweight document reader for Windows. It supports PDF, eBook (ePub, Mobi), XPS, DjVu, CHM, and Comic Book (CBZ and CBR) formats. It is designed for fast startup, minimal interface, and low memory usage.",
        license: "GPLv3",
        version: "v3.5.2",
        downloads: 780000,
        rating: 4.8,
        repo: "https://github.com/sumatrapdfreader/sumatrapdf",
        downloadUrl: "https://github.com/sumatrapdfreader/sumatrapdf/releases/download/rel-3.5.2/SumatraPDF-3.5.2-64-install.exe",
        updated: "2026-03-10"
    },
    {
        id: "peazip",
        name: "PeaZip",
        category: "Utilities",
        developer: "Giorgio Tani",
        shortDesc: "Free file archiver and utility, supports 7Z, RAR, ZIP, and PEA formats.",
        longDesc: "PeaZip is a free and open-source file manager and file archiver utility for Windows, macOS, and Linux. It supports over 200 archive formats, including ZIP, 7Z, TAR, and is capable of extracting RAR files. It features advanced encryption, secure deletion, and checksum verification tools.",
        license: "GPLv3",
        version: "v9.8.0",
        downloads: 210000,
        rating: 4.6,
        repo: "https://github.com/peazip/PeaZip",
        downloadUrl: "https://github.com/peazip/PeaZip/releases/download/9.8.0/peazip-9.8.0.WIN64.exe",
        updated: "2026-05-14"
    },
    {
        id: "flow-launcher",
        name: "Flow Launcher",
        category: "Utilities",
        developer: "Flow Launcher Team",
        shortDesc: "Quick file search and application launcher for Windows with rich plugin support.",
        longDesc: "Flow Launcher is a premium, open-source app launcher and search tool for Windows power users. It enables instant searches for applications, files, browser bookmarks, system settings, and more. It features high performance, a beautiful interface, and extensive plugin customizability.",
        license: "MIT",
        version: "v1.18.0",
        downloads: 340000,
        rating: 4.9,
        repo: "https://github.com/Flow-Launcher/Flow.Launcher",
        downloadUrl: "https://github.com/Flow-Launcher/Flow.Launcher/releases/download/v1.18.0/Flow-Launcher-Setup.exe",
        updated: "2026-05-23"
    },
    {
        id: "dbeaver",
        name: "DBeaver Community",
        category: "Development",
        developer: "DBeaver Corporation",
        shortDesc: "Free multi-platform database GUI tool for developers and SQL users.",
        longDesc: "DBeaver is a free, open-source multi-platform database tool and SQL client. It supports all popular databases: MySQL, PostgreSQL, SQLite, Oracle, DB2, SQL Server, Sybase, MS Access, Firebird, Apache Hive, Phoenix, and Presto. It provides a visual editor, schema designer, and SQL console.",
        license: "Apache 2.0",
        version: "v24.0.5",
        downloads: 540000,
        rating: 4.8,
        repo: "https://github.com/dbeaver/dbeaver",
        downloadUrl: "https://github.com/dbeaver/dbeaver/releases/download/24.0.5/dbeaver-ce-24.0.5-x86_64-setup.exe",
        updated: "2026-05-19"
    },
    {
        id: "shotcut",
        name: "Shotcut",
        category: "Multimedia",
        developer: "Meltytech, LLC",
        shortDesc: "Free, open-source, cross-platform non-linear video editor.",
        longDesc: "Shotcut is a free, open source, cross-platform video editor. It supports hundreds of audio and video formats and codecs, features a multi-format timeline, and offers advanced features like 4K resolution support, color correction, and audio mixing.",
        license: "GPLv3",
        version: "v24.04.28",
        downloads: 420000,
        rating: 4.7,
        repo: "https://github.com/mltframework/shotcut",
        downloadUrl: "https://github.com/mltframework/shotcut/releases/download/v24.04.28/shotcut-win64-240428.exe",
        updated: "2026-04-28"
    },
    {
        id: "librewolf",
        name: "LibreWolf",
        category: "Security",
        developer: "LibreWolf Community",
        shortDesc: "Privacy-focused, independent fork of Firefox with telemetry removed.",
        longDesc: "LibreWolf is a free and open-source web browser, designed for privacy, security, and user freedom. It is a customized independent fork of Firefox, targeting privacy protection by default with telemetry, data collection, and tracking disabled out-of-the-box.",
        license: "MPLv2",
        version: "v126.0-1",
        downloads: 280000,
        rating: 4.8,
        repo: "https://gitlab.com/librewolf-community/browser",
        downloadUrl: "https://gitlab.com/api/v4/projects/librewolf-community%2Fbrowser%2Fwindows/packages/generic/librewolf/126.0-1/librewolf-126.0-1-windows-x64-setup.exe",
        updated: "2026-05-21"
    },
    {
        id: "github-desktop",
        name: "GitHub Desktop",
        category: "Development",
        developer: "GitHub, Inc.",
        shortDesc: "Official open-source Git client to manage repositories visually.",
        longDesc: "GitHub Desktop is a free, open-source Git client designed to simplify your development workflow. It allows you to visualize commits, manage branches, merge code, and push changes to GitHub or other git platforms without using command line operations.",
        license: "MIT",
        version: "v3.3.12",
        downloads: 1100000,
        rating: 4.8,
        repo: "https://github.com/desktop/desktop",
        downloadUrl: "https://central.github.com/deployments/desktop/desktop/latest/win32",
        updated: "2026-05-15"
    },
    {
        id: "autohotkey",
        name: "AutoHotkey",
        category: "Utilities",
        developer: "Lexikos & Contributors",
        shortDesc: "Powerful scripting language for Windows for automation and hotkeys.",
        longDesc: "AutoHotkey is a free, open-source scripting language for Windows that allows users to easily create small to complex scripts for all kinds of tasks such as form fillers, auto-clicking, macros, and keyboard/mouse shortcut remapping.",
        license: "GPLv2",
        version: "v2.0.11",
        downloads: 720000,
        rating: 4.9,
        repo: "https://github.com/AutoHotkey/AutoHotkey",
        downloadUrl: "https://github.com/AutoHotkey/AutoHotkey/releases/download/v2.0.11/AHK_2.0.11_setup.exe",
        updated: "2026-01-20"
    },
    {
        id: "cura",
        name: "Ultimaker Cura",
        category: "Graphics",
        developer: "Ultimaker",
        shortDesc: "Open-source 3D printer slicing software, converting models to print instructions.",
        longDesc: "Ultimaker Cura is a free, open-source 3D slicing software developed by Ultimaker. It takes 3D models (STL, 3MF) and slices them into G-code layers for 3D printers. It features over 400 settings for customized prints and supports hundreds of printer models.",
        license: "LGPLv3",
        version: "v5.7.1",
        downloads: 580000,
        rating: 4.8,
        repo: "https://github.com/Ultimaker/Cura",
        downloadUrl: "https://github.com/Ultimaker/Cura/releases/download/5.7.1/UltiMaker-Cura-5.7.1-win64-X64.exe",
        updated: "2026-04-20"
    },
    {
        id: "whatsapp",
        name: "WhatsApp Desktop",
        category: "Productivity",
        developer: "Meta Platforms Inc.",
        shortDesc: "Official WhatsApp desktop client for messaging and calling.",
        longDesc: "WhatsApp Desktop brings your chats and calls to your computer, keeping you connected with family, friends, and colleagues. Sync your mobile chats seamlessly, send messages, make voice/video calls, and share documents directly from your Windows desktop.",
        license: "Proprietary / Freeware",
        version: "v2.2418.6",
        downloads: 1950000,
        rating: 4.6,
        repo: "https://www.whatsapp.com",
        downloadUrl: "https://github.com/portapps/whatsapp-portable/releases/latest/download/WhatsAppSetup-win64.exe",
        updated: "2026-05-18"
    },
    {
        id: "google-drive",
        name: "Google Drive",
        category: "Productivity",
        developer: "Google LLC",
        shortDesc: "Cloud storage client to sync files, photos, and documents.",
        longDesc: "Google Drive for desktop allows you to access and sync your cloud files directly from your computer. Free up local disk space by streaming files directly from the cloud, collaborate in real-time, and keep all your documents automatically backed up and in sync.",
        license: "Proprietary / Freeware",
        version: "v90.0.2",
        downloads: 2250000,
        rating: 4.7,
        repo: "https://www.google.com/drive",
        downloadUrl: "https://dl.google.com/drive-file-stream/GoogleDriveSetup.exe",
        updated: "2026-05-20"
    },
    {
        id: "chromium",
        name: "Chromium Browser",
        category: "Security",
        developer: "The Chromium Project",
        shortDesc: "Open-source web browser project aiming to build a safer, faster way to experience the web.",
        longDesc: "Chromium is an open-source browser project that serves as the foundation for Google Chrome, Brave, Microsoft Edge, and other modern browsers. It provides a lightweight, minimalist interface, extremely fast rendering speeds via the V8 engine, and serves as a privacy-respecting baseline browser for developers and power users.",
        license: "BSD",
        version: "v126.0.6478",
        downloads: 480000,
        rating: 4.5,
        repo: "https://chromium.googlesource.com/chromium/src",
        downloadUrl: "https://github.com/Hibbiki/chromium-win64/releases/latest/download/mini_installer.exe",
        updated: "2026-05-22"
    },
    {
        id: "chrome",
        name: "Google Chrome",
        category: "Security",
        developer: "Google LLC",
        shortDesc: "Fast, secure, and customizable web browser built by Google.",
        longDesc: "Google Chrome is the world's most popular web browser, built on the open-source Chromium engine. It offers built-in search features, automated page translation, custom extension support, password management, and seamless synchronization with your Google account across all devices.",
        license: "Proprietary / Freeware",
        version: "v125.0.6422",
        downloads: 4200000,
        rating: 4.8,
        repo: "https://www.google.com/chrome",
        downloadUrl: "https://dl.google.com/tag/s/appguid%3D%7B8A282428-5A77-4C36-8341-4A877175A384%7D/update2/installers/ChromeSetup.exe",
        updated: "2026-05-24"
    },
    {
        id: "itunes",
        name: "iTunes",
        category: "Multimedia",
        developer: "Apple Inc.",
        shortDesc: "Official Apple media player and device management tool for Windows.",
        longDesc: "iTunes for Windows is the official software to play your music and video library, back up and manage iOS devices, and sync content (photos, contacts, calendars) from your PC to your iPhone, iPad, or iPod.",
        license: "Proprietary / Freeware",
        version: "v12.13.2",
        downloads: 1420000,
        rating: 4.5,
        repo: "https://www.apple.com/itunes/",
        downloadUrl: "https://www.apple.com/itunes/download/win64",
        updated: "2026-03-02"
    },
    {
        id: "icloud",
        name: "iCloud",
        category: "Productivity",
        developer: "Apple Inc.",
        shortDesc: "Official Apple cloud storage utility to sync photos, files, and mail on Windows.",
        longDesc: "iCloud for Windows allows you to access your photos, videos, mail, calendar, files, and other key information from your Apple devices directly on your Windows PC. This standalone installer is required for advanced integrations (like AltStore).",
        license: "Proprietary / Freeware",
        version: "v11.6",
        downloads: 820000,
        rating: 4.3,
        repo: "https://www.apple.com/icloud/",
        downloadUrl: "https://updates.cdn-apple.com/2020/windows/001-39935-20200911-1A70AA56-F448-11EA-8CC0-99D41950005E/iCloudSetup.exe",
        updated: "2020-09-21"
    },
    {
        id: "apple-music",
        name: "Apple Music",
        category: "Multimedia",
        developer: "Apple Inc.",
        shortDesc: "Stream over 100 million songs ad-free directly on your Windows PC.",
        longDesc: "Apple Music is Apple's premium music streaming service client for Windows 10/11. Stream millions of songs, listen to curated playlists, follow lyrics in real-time, and download your favorite audio tracks for offline playback.",
        license: "Proprietary / Freeware",
        version: "v1.4.0",
        downloads: 350000,
        rating: 4.4,
        repo: "https://www.apple.com/apple-music/",
        downloadUrl: "https://apps.microsoft.com/detail/9pf0245xjqks",
        updated: "2026-02-15"
    },
    {
        id: "apple-tv",
        name: "Apple TV",
        category: "Multimedia",
        developer: "Apple Inc.",
        shortDesc: "Stream Apple TV+, watch movies, and purchase premium shows on Windows.",
        longDesc: "Apple TV for Windows is the official app to watch Apple TV+, buy or rent movies and TV shows, and access your personal purchases. It features 4K HDR playback and seamless integration with your Apple Account library.",
        license: "Proprietary / Freeware",
        version: "v1.4.0",
        downloads: 280000,
        rating: 4.2,
        repo: "https://www.apple.com/apple-tv-app/",
        downloadUrl: "https://apps.microsoft.com/detail/9np1phxrrlwl",
        updated: "2026-02-15"
    },
    {
        id: "apple-devices",
        name: "Apple Devices",
        category: "Utilities",
        developer: "Apple Inc.",
        shortDesc: "Official utility to sync, back up, and update Apple devices from Windows.",
        longDesc: "Apple Devices for Windows is the dedicated modern app to manage your iPhone, iPad, and iPod from a Windows 10/11 PC. Easily sync music, movies, and TV shows, create local device backups, and update/restore iOS software.",
        license: "Proprietary / Freeware",
        version: "v1.4.0",
        downloads: 190000,
        rating: 4.1,
        repo: "https://support.apple.com/en-us/109038",
        downloadUrl: "https://apps.microsoft.com/detail/9np83r2vtq0c",
        updated: "2026-02-15"
    },
    {
        id: "samsung-smart-switch",
        name: "Samsung Smart Switch",
        category: "Utilities",
        developer: "Samsung Electronics",
        shortDesc: "Seamlessly migrate files and back up your Samsung Galaxy device on PC.",
        longDesc: "Samsung Smart Switch for PC makes it easy to back up, restore, and transfer your contacts, photos, messages, and settings from your Galaxy mobile device to a Windows computer. It also lets you update your device's operating system firmware.",
        license: "Proprietary / Freeware",
        version: "v4.3.2406",
        downloads: 640000,
        rating: 4.6,
        repo: "https://www.samsung.com/smartswitch/",
        downloadUrl: "https://www.samsung.com/global/download/smartswitchwin/",
        updated: "2024-06-26"
    },
    {
        id: "samsung-flow",
        name: "Samsung Flow",
        category: "Utilities",
        developer: "Samsung Electronics",
        shortDesc: "Connect and share files or notifications between your Galaxy phone and PC.",
        longDesc: "Samsung Flow delivers a seamless, secure connection between your smartphone and tablet or PC. Mirror your phone screen, transfer files, sync notifications, and unlock your PC using your mobile device's biometrics.",
        license: "Proprietary / Freeware",
        version: "v4.9.15",
        downloads: 310000,
        rating: 4.4,
        repo: "https://www.samsung.com/global/galaxy/apps/samsung-flow/",
        downloadUrl: "https://apps.microsoft.com/detail/9nblggh5gb0m",
        updated: "2026-03-10"
    },
    {
        id: "samsung-notes",
        name: "Samsung Notes",
        category: "Productivity",
        developer: "Samsung Electronics",
        shortDesc: "Sync and edit your Samsung Notes documents on your Windows computer.",
        longDesc: "Samsung Notes for Windows allows you to create, edit, and organize notes on your computer, syncing them with your Galaxy devices. Draw with an active stylus, write text documents, record voice clips, and organize them into folders.",
        license: "Proprietary / Freeware",
        version: "v4.4.2",
        downloads: 490000,
        rating: 4.5,
        repo: "https://www.samsung.com/",
        downloadUrl: "https://apps.microsoft.com/detail/9nblggh43vvw",
        updated: "2026-02-28"
    },
    {
        id: "samsung-smartthings",
        name: "SmartThings",
        category: "Utilities",
        developer: "Samsung Electronics",
        shortDesc: "Control and monitor your smart home devices directly from Windows.",
        longDesc: "SmartThings for PC lets you control and monitor your smart home appliances, lights, thermostats, and IoT security devices. Create automation routines, check device statuses, and manage smart speakers directly from your desktop.",
        license: "Proprietary / Freeware",
        version: "v1.0.120",
        downloads: 220000,
        rating: 4.3,
        repo: "https://www.smartthings.com/",
        downloadUrl: "https://apps.microsoft.com/detail/9n3zbh5v7hj6",
        updated: "2026-04-05"
    },
    {
        id: "samsung-quick-share",
        name: "Quick Share",
        category: "Utilities",
        developer: "Samsung Electronics",
        shortDesc: "P2P sharing utility to send photos, videos, and files to nearby devices.",
        longDesc: "Quick Share is Samsung’s peer-to-peer file sharing utility for wireless transfers. Share photos, documents, and large videos with nearby Galaxy devices, Android smartphones, and Windows PCs instantly without an active internet connection.",
        license: "Proprietary / Freeware",
        version: "v1.2.5",
        downloads: 580000,
        rating: 4.7,
        repo: "https://www.samsung.com/",
        downloadUrl: "https://apps.microsoft.com/detail/9nblggh4r9nw",
        updated: "2026-03-20"
    },
    {
        id: "google-antigravity",
        name: "Google Antigravity",
        category: "Development",
        developer: "Google LLC",
        shortDesc: "Agentic command center and development platform for AI software agents.",
        longDesc: "Google Antigravity is an agentic development environment and command center designed for the agent-first era. It enables launching, monitoring, and orchestrating powerful AI agents with multi-step reasoning, multi-file code editing, tool execution, and local workspace sync capabilities.",
        license: "Proprietary / Freeware",
        version: "v2.1.0",
        downloads: 15000,
        rating: 4.9,
        repo: "https://github.com/google/antigravity",
        downloadUrl: "https://antigravity.google",
        updated: "2026-06-08"
    },
    {
        id: "cursor",
        name: "Cursor",
        category: "Development",
        developer: "Anysphere",
        shortDesc: "AI-first code editor built as a fork of Visual Studio Code.",
        longDesc: "Cursor is the AI-first code editor designed for pair programming. Built as a fork of VS Code, it includes built-in autocomplete, chat interface, and Cascade-style agentic edit features, enabling rapid software development using advanced LLM assistance.",
        license: "Proprietary / Freeware",
        version: "v0.45.8",
        downloads: 920000,
        rating: 4.8,
        repo: "https://github.com/getcursor/cursor",
        downloadUrl: "https://downloader.cursor.sh/builds/release/windows/x64",
        updated: "2026-05-15"
    },
    {
        id: "windsurf",
        name: "Windsurf",
        category: "Development",
        developer: "Codeium",
        shortDesc: "The first agentic AI-powered IDE built on the VS Code open source base.",
        longDesc: "Windsurf is an AI-native code editor created by Codeium. It features Cascade, an agentic coding assistant that can plan and execute multi-file changes, run commands, and write tests, seamlessly integrating AI intelligence with developer workflow.",
        license: "Proprietary / Freeware",
        version: "v1.2.0",
        downloads: 430000,
        rating: 4.7,
        repo: "https://github.com/codeium/windsurf",
        downloadUrl: "https://windsurf-stable.codeium.com/api/update/win32-x64/stable/latest",
        updated: "2026-05-20"
    },
    {
        id: "android-studio",
        name: "Android Studio",
        category: "Development",
        developer: "Google LLC",
        shortDesc: "The official Integrated Development Environment (IDE) for Android development.",
        longDesc: "Android Studio is the official IDE for Google's Android operating system, built on JetBrains' IntelliJ IDEA software. It offers a structured Gradle-based build system, high-performance emulator, code templates, and Gemini-based AI coding assistant for mobile developers.",
        license: "Apache 2.0 / Freeware",
        version: "v2024.1.1",
        downloads: 1850000,
        rating: 4.8,
        repo: "https://android.googlesource.com/platform/tools/base",
        downloadUrl: "https://developer.android.com/studio",
        updated: "2026-05-10"
    },
    {
        id: "xampp",
        name: "XAMPP",
        category: "Development",
        developer: "Apache Friends",
        shortDesc: "Easy to install Apache distribution containing MariaDB, PHP, and Perl.",
        longDesc: "XAMPP is the most popular PHP development environment. It is an entirely free, easy to install Apache distribution containing MariaDB, PHP, and Perl. The open source package has been set up to be incredibly easy to install and to use.",
        license: "GPLv2",
        version: "v8.2.12",
        downloads: 920000,
        rating: 4.7,
        repo: "https://github.com/apachefriends/xampp",
        downloadUrl: "https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/8.2.12/xampp-windows-x64-8.2.12-0-VS16-installer.exe/download",
        updated: "2026-05-15"
    },
    {
        id: "keepass",
        name: "KeePass",
        category: "Security",
        developer: "Dominik Reichl",
        shortDesc: "Free, open source, lightweight and easy-to-use password manager.",
        longDesc: "KeePass Password Safe is a free open source password manager, which helps you to manage your passwords in a secure way. You can store all your passwords in one database, which is locked with a master key.",
        license: "GPLv2",
        version: "v2.57",
        downloads: 820000,
        rating: 4.9,
        repo: "https://github.com/keepassxreboot/keepassxc",
        downloadUrl: "https://downloads.sourceforge.net/keepass/KeePass-2.57-Setup.exe",
        updated: "2026-05-20"
    },
    {
        id: "dnb-risk-analytics",
        name: "D&B Risk Analytics",
        category: "Productivity",
        developer: "Dun & Bradstreet",
        shortDesc: "Enterprise supply chain risk mitigation and intelligence platform.",
        longDesc: "Dun & Bradstreet Risk Analytics - Supplier Intelligence is a powerful enterprise tool designed to assess and monitor supplier risks. It provides real-time insights, compliance tracking, financial viability scores, and supply chain vulnerability analysis.",
        license: "Proprietary",
        version: "v2026.2",
        downloads: 12000,
        rating: 4.4,
        repo: "https://www.dnb.com",
        downloadUrl: "https://www.dnb.com/products/third-party-risk-compliance/supplier-intelligence.html",
        updated: "2026-04-10"
    },
    {
        id: "compup",
        name: "CompUp",
        category: "Productivity",
        developer: "CompUp Inc.",
        shortDesc: "HR compensation benchmarking and talent management SaaS platform.",
        longDesc: "CompUp is an enterprise compensation intelligence software that helps HR leaders benchmark salaries, design payroll bands, and perform real-time compensation audits using anonymous industry datasets.",
        license: "Proprietary",
        version: "v3.1.0",
        downloads: 8500,
        rating: 4.3,
        repo: "https://www.compup.io",
        downloadUrl: "https://www.compup.io",
        updated: "2026-03-25"
    },
    {
        id: "safe-exam-browser",
        name: "Safe Exam Browser",
        category: "Utilities",
        developer: "Safe Exam Browser Alliance",
        shortDesc: "Secure web browser environment to carry out online exams safely.",
        longDesc: "Safe Exam Browser (SEB) turns any computer temporarily into a secure workstation. It controls access to resources like system functions, other websites and applications and prevents unauthorized resources from being used during an exam.",
        license: "Mozilla Public License 2.0",
        version: "v3.7.0",
        downloads: 94000,
        rating: 4.5,
        repo: "https://github.com/SafeExamBrowser/seb-win",
        downloadUrl: "https://github.com/SafeExamBrowser/seb-win-refactoring/releases/download/3.7.0/SEB_3.7.0.672_SetupBundle.exe",
        updated: "2026-04-28"
    },
    {
        id: "geoserver",
        name: "GeoServer",
        category: "Graphics",
        developer: "Open Source Geospatial Foundation",
        shortDesc: "Open source server for sharing, editing, and publishing geospatial data.",
        longDesc: "GeoServer is an open-source server written in Java that allows users to share and edit geospatial data. Designed for interoperability, it publishes data from any major spatial data source using open standards.",
        license: "GPLv2",
        version: "v2.25.1",
        downloads: 38000,
        rating: 4.6,
        repo: "https://github.com/geoserver/geoserver",
        downloadUrl: "https://build.geoserver.org/geoserver/main/geoserver-main-latest-war.zip",
        updated: "2026-05-01"
    },
    {
        id: "tg-ws-proxy",
        name: "TG WS Proxy",
        category: "Utilities",
        developer: "TGProxy Team",
        shortDesc: "Telegram WebSockets Proxy server to redirect network websocket requests.",
        longDesc: "TG WS Proxy is an open-source websocket proxy specifically optimized for tunneling Telegram API traffic and websocket proxy relays under restricted firewall conditions.",
        license: "MIT",
        version: "v1.4.2",
        downloads: 15000,
        rating: 4.4,
        repo: "https://github.com/tg-proxy/tg-ws-proxy",
        downloadUrl: "https://github.com/tg-proxy/tg-ws-proxy/archive/refs/tags/v1.4.2.zip",
        updated: "2026-02-12"
    },
    {
        id: "tcl",
        name: "Tcl",
        category: "Development",
        developer: "Tcl Core Team",
        shortDesc: "Tool Command Language, a very powerful but easy to learn dynamic language.",
        longDesc: "Tcl (Tool Command Language) is a very powerful but easy to learn dynamic programming language, suitable for a very wide range of uses, including web and desktop applications, networking, administration, testing and many more.",
        license: "BSD-style",
        version: "v8.6.14",
        downloads: 85000,
        rating: 4.4,
        repo: "https://github.com/tcltk/tcl",
        downloadUrl: "https://prdownloads.sourceforge.net/tcl/tcl8.6.14-src.tar.gz",
        updated: "2026-01-10"
    },
    {
        id: "net-snmp",
        name: "net-snmp",
        category: "Development",
        developer: "Net-SNMP Team",
        shortDesc: "Various tools relating to the Simple Network Management Protocol.",
        longDesc: "Net-SNMP is a suite of applications used to implement SNMP v1, SNMP v2c and SNMP v3 using both IPv4 and IPv6. It includes command-line tools, daemon engines, and a C-based client API.",
        license: "BSD-like",
        version: "v5.9.4",
        downloads: 54000,
        rating: 4.3,
        repo: "https://github.com/net-snmp/net-snmp",
        downloadUrl: "https://sourceforge.net/projects/net-snmp/files/net-snmp/5.9.4/net-snmp-5.9.4.tar.gz/download",
        updated: "2026-03-05"
    },
    {
        id: "v2ray",
        name: "V2Ray",
        category: "Security",
        developer: "V2Fly Community",
        shortDesc: "A platform for building proxies to bypass network censorship.",
        longDesc: "Project V is a set of tools to help you build your own privacy network over internet. The core of Project V, named V2Ray, is responsible for network protocols and communications. It can work alone, as well as combine with other tools.",
        license: "MIT",
        version: "v5.14.1",
        downloads: 450000,
        rating: 4.8,
        repo: "https://github.com/v2fly/v2ray-core",
        downloadUrl: "https://github.com/v2fly/v2ray-core/releases/download/v5.14.1/v2ray-windows-64.zip",
        updated: "2026-05-12"
    },
    {
        id: "wampserver",
        name: "WampServer",
        category: "Development",
        developer: "Romain Bourdon",
        shortDesc: "Windows web development environment for Apache, PHP, and MySQL.",
        longDesc: "WampServer is a Windows web development environment. It allows you to create web applications with Apache2, PHP and a MySQL database. Alongside, PhpMyAdmin allows you to easily manage your databases.",
        license: "GPLv2",
        version: "v3.3.5",
        downloads: 480000,
        rating: 4.6,
        repo: "https://sourceforge.net/projects/wampserver/",
        downloadUrl: "https://sourceforge.net/projects/wampserver/files/latest/download",
        updated: "2026-05-02"
    },
    {
        id: "v2rayn",
        name: "v2rayN",
        category: "Security",
        developer: "2dust",
        shortDesc: "A V2Ray GUI client for Windows, supporting Xray core and v2fly core.",
        longDesc: "v2rayN is a user-friendly GUI client for Windows that acts as a front-end manager for proxy engines like V2Ray, Xray, and Trojan, providing custom routing, profile switching, and proxy speed testing.",
        license: "GPLv3",
        version: "v6.42",
        downloads: 320000,
        rating: 4.7,
        repo: "https://github.com/2dust/v2rayN",
        downloadUrl: "https://github.com/2dust/v2rayN/releases/download/6.42/v2rayN-Core.zip",
        updated: "2026-05-18"
    },
    {
        id: "amnezia-vpn",
        name: "Amnezia VPN",
        category: "Security",
        developer: "Amnezia VPN Contributors",
        shortDesc: "Open-source client to create and manage self-hosted personal VPNs.",
        longDesc: "Amnezia is an open-source VPN client that allows you to deploy your own private VPN on your server. It supports protocols like OpenVPN, WireGuard, ShadowSocks, and Cloak to bypass severe internet blocks.",
        license: "GPLv3",
        version: "v4.6.0",
        downloads: 92000,
        rating: 4.8,
        repo: "https://github.com/amnezia-vpn/amnezia-client",
        downloadUrl: "https://github.com/amnezia-vpn/amnezia-client/releases/download/4.6.0.3/AmneziaVPN_4.6.0.3_x64.msi",
        updated: "2026-05-14"
    },
    {
        id: "wireguard",
        name: "WireGuard for Windows",
        category: "Security",
        developer: "WireGuard Project",
        shortDesc: "Extremely simple yet fast and modern VPN tunnel client.",
        longDesc: "WireGuard is an extremely simple yet fast and modern VPN that utilizes state-of-the-art cryptography. It aims to be faster, simpler, leaner, and more useful than IPsec, while avoiding massive headachy configurations.",
        license: "GPLv2",
        version: "v0.5.3",
        downloads: 750000,
        rating: 4.9,
        repo: "https://git.zx2c4.com/wireguard-windows",
        downloadUrl: "https://download.wireguard.com/windows-client/wireguard-amd64-0.5.3.msi",
        updated: "2026-04-30"
    },
    {
        id: "netmod-vpn",
        name: "NetMod VPN Client (V2Ray/SSH)",
        category: "Security",
        developer: "NetMod Team",
        shortDesc: "VPN client supporting V2Ray, SSH, Trojan, and custom payloads.",
        longDesc: "NetMod is a powerful VPN and network tunnel client for PC that allows custom network headers payload creation, SSH tunneling, and V2Ray/Xray proxy integration for secure web access.",
        license: "Freeware",
        version: "v1.9.8",
        downloads: 64000,
        rating: 4.5,
        repo: "https://github.com/netmod-vpn",
        downloadUrl: "https://github.com/netmod-vpn/netmod-pc/releases/download/v1.9.8/NetMod_1.9.8_x64.exe",
        updated: "2026-03-15"
    },
    {
        id: "tor-browser",
        name: "Tor Browser",
        category: "Security",
        developer: "The Tor Project",
        shortDesc: "Anonymity-focused web browser protecting against tracking and surveillance.",
        longDesc: "Tor Browser is free and open-source software that provides censorship circumvention and anonymity. It routes internet traffic through the Tor network to conceal user identity, location, and web usage from network surveillance.",
        license: "BSD 3-Clause",
        version: "v13.5.1",
        downloads: 580000,
        rating: 4.8,
        repo: "https://github.com/torproject/tor-browser",
        downloadUrl: "https://www.torproject.org/dist/torbrowser/13.5.1/tor-browser-windows-x86_64-portable-13.5.1.exe",
        updated: "2026-05-11"
    },
    {
        id: "sherlock",
        name: "Sherlock",
        category: "Utilities",
        developer: "Sherlock Project",
        shortDesc: "OSINT tool to find usernames across social networks.",
        longDesc: "Sherlock is a command-line OSINT tool written in Python. It searches for active user profiles across hundreds of social networks, forums, and blogging sites simultaneously using a single input username.",
        license: "MIT",
        version: "v0.14.3",
        downloads: 120000,
        rating: 4.7,
        repo: "https://github.com/sherlock-project/sherlock",
        downloadUrl: "https://github.com/sherlock-project/sherlock/archive/refs/tags/v0.14.3.zip",
        updated: "2026-04-14"
    },
    {
        id: "karing",
        name: "Karing",
        category: "Security",
        developer: "Karing Dev",
        shortDesc: "A simplified GUI proxy client based on Sing-box and Clash.",
        longDesc: "Karing is a modern, cross-platform GUI client powered by Clash and Sing-box proxy cores, focusing on simplified rule configurations, speed testing, and sleek dark modes.",
        license: "GPLv3",
        version: "v1.0.8",
        downloads: 22000,
        rating: 4.6,
        repo: "https://github.com/Karing/Karing",
        downloadUrl: "https://github.com/Karing/Karing/releases/download/v1.0.8/karing_1.0.8_windows_x64.msi",
        updated: "2026-05-02"
    },
    {
        id: "double-commander",
        name: "Double Commander",
        category: "Utilities",
        developer: "Double Commander Team",
        shortDesc: "Cross-platform open source file manager with two panels side by side.",
        longDesc: "Double Commander is a cross-platform open source file manager with two panels side by side. It is inspired by Total Commander and features some new ideas, custom plugins, built-in text editor, and archive tools.",
        license: "GPLv2",
        version: "v1.1.13",
        downloads: 78000,
        rating: 4.6,
        repo: "https://github.com/doublecmd/doublecmd",
        downloadUrl: "https://sourceforge.net/projects/doublecmd/files/Double%20Commander%20Windows/1.1.13/doublecmd-1.1.13.x86_64-win64.msi/download",
        updated: "2026-03-20"
    },
    {
        id: "proton-vpn",
        name: "Proton VPN Windows App",
        category: "Security",
        developer: "Proton AG",
        shortDesc: "Secure, private, and high-speed VPN client for Windows.",
        longDesc: "Proton VPN is a community-supported VPN service created by the scientists and engineers behind Proton Mail. It features strong encryption, strict no-logs policy, Tor integration, and NetShield ad-blocking.",
        license: "GPLv3",
        version: "v3.2.1",
        downloads: 410000,
        rating: 4.7,
        repo: "https://github.com/ProtonVPN/win-app",
        downloadUrl: "https://protonvpn.com/download/ProtonVPN_Setup.exe",
        updated: "2026-05-05"
    },
    {
        id: "log4cplus",
        name: "log4cplus",
        category: "Development",
        developer: "log4cplus Contributors",
        shortDesc: "A simple to use C++ logging API modeled after Java log4j.",
        longDesc: "log4cplus is a simple to use C++ logging API providing thread-safe, flexible, and hierarchical log management modeled after the popular Java log4j API.",
        license: "Apache 2.0",
        version: "v2.1.1",
        downloads: 32000,
        rating: 4.3,
        repo: "https://github.com/log4cplus/log4cplus",
        downloadUrl: "https://github.com/log4cplus/log4cplus/releases/download/v2.1.1/log4cplus-2.1.1.zip",
        updated: "2026-02-28"
    },
    {
        id: "nekobox",
        name: "NekoBox for PC (NekoRay)",
        category: "Security",
        developer: "MatsuriDayo",
        shortDesc: "Cross-platform proxy GUI client based on Qt and NekoRay/Sing-box core.",
        longDesc: "NekoBox (NekoRay) is a Qt-based network proxy client supporting custom routing, subscription links, and engines like Xray, Sing-box, Trojan, and ShadowSocks for internet freedom.",
        license: "GPLv3",
        version: "v3.26",
        downloads: 180000,
        rating: 4.8,
        repo: "https://github.com/MatsuriDayo/nekoray",
        downloadUrl: "https://github.com/MatsuriDayo/nekoray/releases/download/3.26/nekoray-3.26-2024-03-24-windows64.zip",
        updated: "2026-05-19"
    },
    {
        id: "hiddify-app",
        name: "hiddify-app",
        category: "Security",
        developer: "Hiddify",
        shortDesc: "Multi-platform proxy client with auto-routing and rule subscriptions.",
        longDesc: "Hiddify App is an open-source, multi-platform proxy client supporting Clash, Sing-box, Xray, and V2Ray profiles. It features automated server speed testing, clean dark UI, and rule-based traffic splitting.",
        license: "GPLv3",
        version: "v2.0.1",
        downloads: 140000,
        rating: 4.8,
        repo: "https://github.com/hiddify/hiddify-app",
        downloadUrl: "https://github.com/hiddify/hiddify-app/releases/download/v2.0.1/Hiddify-Setup-x64.exe",
        updated: "2026-05-18"
    },
    {
        id: "aestheticspro",
        name: "AestheticsPro",
        category: "Productivity",
        developer: "AestheticsPro LLC",
        shortDesc: "Medical Spa Management & electronic medical records (EMR) software.",
        longDesc: "AestheticsPro is an enterprise-grade medical spa management software supporting booking appointments, charting medical histories, managing invoices, and processing client compliance files in a HIPAA-secure platform.",
        license: "Proprietary",
        version: "v2026.1",
        downloads: 14000,
        rating: 4.5,
        repo: "https://www.aestheticspro.com",
        downloadUrl: "https://www.aestheticspro.com",
        updated: "2026-04-05"
    },
    {
        id: "v2raya",
        name: "v2rayA",
        category: "Security",
        developer: "v2rayA Group",
        shortDesc: "A web GUI client of Project V supporting V2Ray, Xray, and Trojan cores.",
        longDesc: "v2rayA is a web-based GUI client for Project V, focused on speed, simple setups, system proxy routing, and transparent proxies under local network routers.",
        license: "AGPLv3",
        version: "v2.2.5.1",
        downloads: 94000,
        rating: 4.7,
        repo: "https://github.com/v2rayA/v2rayA",
        downloadUrl: "https://github.com/v2rayA/v2rayA/archive/refs/tags/v2.2.5.1.zip",
        updated: "2026-04-18"
    },
    {
        id: "clash-verge",
        name: "Clash Verge Rev",
        category: "Security",
        developer: "Clash Verge Rev Team",
        shortDesc: "A Clash GUI client based on Tauri, Clash Meta core, and Mihomo core.",
        longDesc: "Clash Verge Rev is an updated GUI dashboard for Clash Meta, utilizing the lightweight Tauri framework. It provides subscription profiles, system proxy toggles, profile editing, and speed tests.",
        license: "GPLv3",
        version: "v1.6.2",
        downloads: 250000,
        rating: 4.8,
        repo: "https://github.com/clash-verge-rev/clash-verge-rev",
        downloadUrl: "https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v1.6.2/Clash.Verge_1.6.2_x64_en-US.msi",
        updated: "2026-05-17"
    },
    {
        id: "v2ray-desktop",
        name: "V2Ray Desktop",
        category: "Security",
        developer: "Dr. Incognito",
        shortDesc: "Cross-platform desktop GUI client for V2Ray written in Qt.",
        longDesc: "V2Ray Desktop is a cross-platform Qt GUI client for V2Ray. It aims to simplify server setup management, client execution, subscription updates, and custom routing configurations.",
        license: "GPLv3",
        version: "v3.0.2",
        downloads: 58000,
        rating: 4.6,
        repo: "https://github.com/Dr-Incognito/v2ray-desktop",
        downloadUrl: "https://github.com/Dr-Incognito/v2ray-desktop/releases/download/v3.0.2/v2ray-desktop_3.0.2_windows_x64.zip",
        updated: "2026-03-22"
    },
    {
        id: "hibernate",
        name: "Hibernate",
        category: "Development",
        developer: "Red Hat / Hibernate Team",
        shortDesc: "High performance object/relational persistence and query service for Java.",
        longDesc: "Hibernate ORM enables developers to write applications whose data outlives the application process. It maps Java classes to database tables and provides data query and retrieval facilities.",
        license: "LGPLv2.1",
        version: "v6.5.2",
        downloads: 380000,
        rating: 4.6,
        repo: "https://github.com/hibernate/hibernate-orm",
        downloadUrl: "https://github.com/hibernate/hibernate-orm/archive/refs/tags/6.5.2.Final.zip",
        updated: "2026-04-12"
    },
    {
        id: "sing-box",
        name: "Sing-box",
        category: "Security",
        developer: "SagerNet",
        shortDesc: "The universal proxy platform toolchain with high performance.",
        longDesc: "Sing-box is a universal proxy platform written in Go, acting as a high-performance core engine for WireGuard, ShadowSocks, Trojan, V2Ray, and Clash configs, with low memory overhead.",
        license: "GPLv3",
        version: "v1.9.3",
        downloads: 190000,
        rating: 4.9,
        repo: "https://github.com/SagerNet/sing-box",
        downloadUrl: "https://github.com/SagerNet/sing-box/releases/download/v1.9.3/sing-box-1.9.3-windows-amd64.zip",
        updated: "2026-05-18"
    },
    {
        id: "dnb-hoovers",
        name: "D&B Hoovers",
        category: "Productivity",
        developer: "Dun & Bradstreet",
        shortDesc: "Sales intelligence and B2B lead generation accelerator portal.",
        longDesc: "D&B Hoovers is a sales acceleration and B2B directory platform that leverages commercial data to deliver real-time B2B insights, firmographic details, contact databases, and customer targeting.",
        license: "Proprietary",
        version: "v2026.2",
        downloads: 15000,
        rating: 4.4,
        repo: "https://www.dnb.com",
        downloadUrl: "https://www.dnb.com/products/marketing-sales/dnb-hoovers.html",
        updated: "2026-04-10"
    },
    {
        id: "cloudflare-tunnel",
        name: "Cloudflare Tunnel Client",
        category: "Utilities",
        developer: "Cloudflare",
        shortDesc: "Cloudflared daemon client to tunnel local servers securely through Cloudflare.",
        longDesc: "Cloudflare Tunnel (cloudflared) creates a secure connection between your local web servers and the Cloudflare edge network, exposing services without configuring public IP ports or firewall rules.",
        license: "Apache 2.0",
        version: "v2026.5.0",
        downloads: 220000,
        rating: 4.8,
        repo: "https://github.com/cloudflare/cloudflared",
        downloadUrl: "https://github.com/cloudflare/cloudflared/releases/download/2026.5.0/cloudflared-windows-amd64.msi",
        updated: "2026-05-15"
    },
    {
        id: "vuze",
        name: "Vuze - Azureus",
        category: "Utilities",
        developer: "Vuze Developer Team",
        shortDesc: "BitTorrent client designed to search, download, and play torrents.",
        longDesc: "Vuze (formerly Azureus) is an open-source BitTorrent client written in Java. It features advanced torrent management, built-in search filters, HD video player, and remote controls.",
        license: "GPLv2",
        version: "v5.7.6",
        downloads: 240000,
        rating: 4.3,
        repo: "https://github.com/vuze/vuze",
        downloadUrl: "https://sourceforge.net/projects/azureus/files/latest/download",
        updated: "2026-01-20"
    },
    {
        id: "angry-ip",
        name: "Angry IP Scanner",
        category: "Utilities",
        developer: "Anton Keks",
        shortDesc: "Fast and friendly open-source network IP and port scanner.",
        longDesc: "Angry IP Scanner is a cross-platform network scanner designed to be fast and simple to use. It scans IP addresses and ports, resolving hostnames, MAC addresses, and NetBIOS info.",
        license: "GPLv2",
        version: "v3.9.1",
        downloads: 380000,
        rating: 4.8,
        repo: "https://github.com/angryip/ipscan",
        downloadUrl: "https://github.com/angryip/ipscan/releases/download/3.9.1/ipscan-win64-3.9.1.exe",
        updated: "2026-05-08"
    },
    {
        id: "zero-install",
        name: "Zero Install",
        category: "Utilities",
        developer: "Thomas Leonard",
        shortDesc: "Decentralized software installation system running apps without setups.",
        longDesc: "Zero Install is a decentralized software distribution system. It allows applications to run directly from their URLs without installation, resolving dependencies automatically and securely.",
        license: "LGPLv2.1",
        version: "v2.25",
        downloads: 45000,
        rating: 4.4,
        repo: "https://github.com/0install/0install",
        downloadUrl: "https://zeroinstall.de/files/ZeroInstall-Setup.exe",
        updated: "2026-03-10"
    },
    {
        id: "flowseal",
        name: "Flowseal",
        category: "Utilities",
        developer: "Flowseal Project",
        shortDesc: "Minimalist desktop productivity tool to structure workflows and window layouts.",
        longDesc: "Flowseal is an open-source window manager and screen utility helper designed to dock apps, layout custom canvases, and group active panels to organize daily focus tasks.",
        license: "MIT",
        version: "v1.2.0",
        downloads: 8000,
        rating: 4.5,
        repo: "https://github.com/flowseal/flowseal",
        downloadUrl: "https://github.com/flowseal/flowseal/releases/latest",
        updated: "2026-04-01"
    },
    {
        id: "xray-core",
        name: "Xray Core",
        category: "Security",
        developer: "XTLS Project",
        shortDesc: "A superset of V2Ray-core supporting high-performance XTLS encryption.",
        longDesc: "Xray is a set of network proxy tools designed to assist in bypassing network filtering. It is a superset of V2Ray with complete XTLS support, offering much faster processing speeds.",
        license: "Proprietary-Free / MIT",
        version: "v1.8.11",
        downloads: 350000,
        rating: 4.9,
        repo: "https://github.com/XTLS/Xray-core",
        downloadUrl: "https://github.com/XTLS/Xray-core/releases/download/v1.8.11/Xray-windows-64.zip",
        updated: "2026-05-18"
    },
    {
        id: "appserv",
        name: "AppServ",
        category: "Development",
        developer: "AppServ Open Project",
        shortDesc: "PHP, Apache, MySQL, and phpMyAdmin bundle setup for Windows developers.",
        longDesc: "AppServ is a merged bundle installer of Apache, PHP, MySQL, and phpMyAdmin for Windows. It provides a quick local server development sandbox setup in under one minute.",
        license: "GPLv2",
        version: "v9.3.0",
        downloads: 190000,
        rating: 4.5,
        repo: "https://github.com/appserv/appserv",
        downloadUrl: "https://sourceforge.net/projects/appserv/files/latest/download",
        updated: "2026-04-18"
    },
    {
        id: "expat",
        name: "Expat XML Parser",
        category: "Development",
        developer: "Expat Maintainers",
        shortDesc: "Stream-oriented XML parser library written in C.",
        longDesc: "Expat is an XML parser library written in C. It is a stream-oriented parser in which an application registers handlers for XML tags, making it highly memory-efficient.",
        license: "MIT",
        version: "v2.6.2",
        downloads: 48000,
        rating: 4.4,
        repo: "https://github.com/libexpat/libexpat",
        downloadUrl: "https://github.com/libexpat/libexpat/releases/download/R_2_6_2/expat-win32bin-2.6.2.exe",
        updated: "2026-03-12"
    },
    {
        id: "cromite",
        name: "Cromite",
        category: "Security",
        developer: "uazo",
        shortDesc: "Privacy-focused Chromium fork with built-in ad blocker.",
        longDesc: "Cromite is a privacy-focused fork of Chromium with integrated ad-blocking, script filtering, anti-fingerprinting patches, and telemetry removal.",
        license: "GPLv3",
        version: "v125.0.6422.112",
        downloads: 62000,
        rating: 4.7,
        repo: "https://github.com/uazo/cromite",
        downloadUrl: "https://github.com/uazo/cromite/releases/download/v125.0.6422.112/cromite_125.0.6422.112_x64.zip",
        updated: "2026-05-20"
    },
    {
        id: "dns2socks",
        name: "DNS2SOCKS",
        category: "Security",
        developer: "DNS2SOCKS Project",
        shortDesc: "Utility to forward DNS requests through a SOCKS5 proxy tunnel.",
        longDesc: "DNS2SOCKS is a command-line tool that forwards local DNS queries to a SOCKS5 proxy, bypassing local DNS poisoning and network inspection.",
        license: "GPLv3",
        version: "v2.1",
        downloads: 35000,
        rating: 4.5,
        repo: "https://sourceforge.net/projects/dns2socks/",
        downloadUrl: "https://sourceforge.net/projects/dns2socks/files/latest/download",
        updated: "2026-02-15"
    },
    {
        id: "powertoys",
        name: "Microsoft PowerToys",
        category: "Utilities",
        developer: "Microsoft Corporation",
        shortDesc: "A set of utilities for power users to tune and streamline their Windows experience.",
        longDesc: "Microsoft PowerToys is a set of utilities for Windows power users to tune and customize their system for greater productivity. It includes tools like FancyZones for custom grid layouts, PowerToys Run (an instant launcher), ColorPicker, Text Extractor, Image Resizer, File Locksmith, and various other system tweaks.",
        license: "MIT",
        version: "v0.81.1",
        downloads: 1420000,
        rating: 4.9,
        repo: "https://github.com/microsoft/PowerToys",
        downloadUrl: "https://github.com/microsoft/PowerToys/releases/download/v0.81.1/PowerToysSetup-0.81.1-x64.exe",
        updated: "2026-05-24"
    },
    {
        id: "eartrumpet",
        name: "EarTrumpet",
        category: "Utilities",
        developer: "File-New-Project",
        shortDesc: "Powerful volume control application for Windows with multi-device support.",
        longDesc: "EarTrumpet is a modern, feature-rich volume control application for Windows. It overrides the standard system tray flyout to provide app-specific volume levels, seamless playback device switching, and advanced audio routing options via an interface that integrates beautifully with Windows.",
        license: "MIT",
        version: "v2.3.0",
        downloads: 680000,
        rating: 4.8,
        repo: "https://github.com/File-New-Project/EarTrumpet",
        downloadUrl: "https://github.com/File-New-Project/EarTrumpet/releases/download/v2.1.8.0/EarTrumpet.2.1.8.0.exe",
        updated: "2026-05-22"
    },
    {
        id: "winget",
        name: "Windows Package Manager (winget)",
        category: "Development",
        developer: "Microsoft Corporation",
        shortDesc: "CLI package manager to discover, install, upgrade, and configure Windows applications.",
        longDesc: "Windows Package Manager (winget) is Microsoft's official command-line package management tool. It allows developers, administrators, and power users to search, download, install, upgrade, and manage desktop applications from a trusted registry using shell commands, enabling easy software automation.",
        license: "MIT",
        version: "v1.8.1911",
        downloads: 2450000,
        rating: 4.9,
        repo: "https://github.com/microsoft/winget-cli",
        downloadUrl: "https://github.com/microsoft/winget-cli/releases/download/v1.8.1911/Microsoft.DesktopAppInstaller_8wekyb3d8bbwe.msixbundle",
        updated: "2026-05-23"
    },
    {
        id: "html5-editor",
        name: "HTML5 Editor",
        category: "Development",
        developer: "HTML5Editor team",
        shortDesc: "An online/offline WYSIWYG HTML editor for developers.",
        longDesc: "HTML5 Editor is a clean, real-time visual web editor. It helps developers edit HTML, clean up inline CSS styles, test responsive layouts, and compress source markup inside a browser framework.",
        license: "MIT",
        version: "v1.2.5",
        downloads: 48000,
        rating: 4.5,
        repo: "https://github.com/html5-editor/html5-editor",
        downloadUrl: "https://github.com/html5-editor/html5-editor/archive/refs/tags/v1.2.5.zip",
        updated: "2026-03-12"
    },
    {
        id: "freewrl",
        name: "FreeWRL VRML/X3D browser",
        category: "Utilities",
        developer: "FreeWRL Project",
        shortDesc: "Open source VRML/X3D browser for 3D visualization.",
        longDesc: "FreeWRL is an essential tool for viewing VRML (Virtual Reality Modeling Language) and X3D files. It supports advanced scripting, multi-threading rendering, and displays complex interactive 3D environments.",
        license: "GPLv3",
        version: "v4.5.0",
        downloads: 24000,
        rating: 4.3,
        repo: "https://github.com/freewrl/freewrl",
        downloadUrl: "https://sourceforge.net/projects/freewrl/files/latest/download",
        updated: "2026-04-05"
    },
    {
        id: "polarity",
        name: "Polarity Browser",
        category: "Security",
        developer: "Polarity Team",
        shortDesc: "Dual-engine web browser optimized for low RAM usage and security.",
        longDesc: "Polarity Browser is a lightweight web browser utilizing both Trident and Blink engines. It comes with built-in ad-blocking, tab recovery, tracking prevention, and customized script options for safe browsing.",
        license: "Freeware",
        version: "v10.1.0",
        downloads: 72000,
        rating: 4.5,
        repo: "https://github.com/polarity-browser/polarity",
        downloadUrl: "https://sourceforge.net/projects/polaritybrowser/files/latest/download",
        updated: "2026-01-20"
    },
    {
        id: "web-scrobbler",
        name: "Web Scrobbler",
        category: "Multimedia",
        developer: "Web Scrobbler Contributors",
        shortDesc: "Browser extension to scrobble music from web audio players.",
        longDesc: "Web Scrobbler is a browser extension that helps music listeners scrobble their listening history from web-based players like YouTube, Spotify Web, SoundCloud, and Bandcamp to Last.fm and Libre.fm.",
        license: "MIT",
        version: "v3.6.0",
        downloads: 98000,
        rating: 4.8,
        repo: "https://github.com/web-scrobbler/web-scrobbler",
        downloadUrl: "https://github.com/web-scrobbler/web-scrobbler/releases/download/v3.6.0/web-scrobbler.zip",
        updated: "2026-05-10"
    },
    {
        id: "greenstone",
        name: "Greenstone",
        category: "Productivity",
        developer: "Waikato Digital Library Project",
        shortDesc: "Software suite for building and distributing digital library collections.",
        longDesc: "Greenstone is a suite of software for building and distributing digital library collections. It provides a new way of organizing information and publishing it on the internet or on CD-ROM.",
        license: "GPLv2",
        version: "v3.11",
        downloads: 32000,
        rating: 4.4,
        repo: "https://github.com/greenstone/greenstone3",
        downloadUrl: "https://sourceforge.net/projects/greenstone/files/latest/download",
        updated: "2026-02-15"
    },
    {
        id: "google2srt",
        name: "Google2SRT",
        category: "Multimedia",
        developer: "Google2SRT Team",
        shortDesc: "Tool to convert Google Video and YouTube subtitles to SRT format.",
        longDesc: "Google2SRT is an open source tool that allows you to download and convert closed captions (CC) and subtitles from YouTube and Google Video into standard SubRip (SRT) format.",
        license: "GPLv3",
        version: "v0.8.2",
        downloads: 64000,
        rating: 4.5,
        repo: "https://sourceforge.net/projects/google2srt/",
        downloadUrl: "https://sourceforge.net/projects/google2srt/files/latest/download",
        updated: "2026-01-08"
    },
    {
        id: "xvideoservicethief",
        name: "xVideoServiceThief",
        category: "Multimedia",
        developer: "xVST Contributors",
        shortDesc: "Video downloader client to grab clips from video sharing portals.",
        longDesc: "xVideoServiceThief is a tool for downloading video clips from popular video portals. It supports converting files to AVI, MPEG, FLV, WMV, and MP4 formats, and schedules queued downloads.",
        license: "GPLv3",
        version: "v2.5.2",
        downloads: 150000,
        rating: 4.4,
        repo: "https://github.com/xvideo-service-thief/xvst",
        downloadUrl: "https://sourceforge.net/projects/xviservicethief/files/latest/download",
        updated: "2026-04-12"
    },
    {
        id: "osx-portable-apps",
        name: "OS X Portable Applications",
        category: "Utilities",
        developer: "OS X Portable team",
        shortDesc: "Packaged portable open source apps wrapper for macOS environment.",
        longDesc: "OS X Portable Applications is a set of open source app packages wrapped into a portable runtime format for macOS, letting users run utilities off external USB drives.",
        license: "GPLv2",
        version: "v2.4",
        downloads: 28000,
        rating: 4.3,
        repo: "https://sourceforge.net/projects/osxportableapps/",
        downloadUrl: "https://sourceforge.net/projects/osxportableapps/files/latest/download",
        updated: "2026-02-28"
    },
    {
        id: "free-manga-downloader",
        name: "Free Manga Downloader",
        category: "Utilities",
        developer: "FMD Contributors",
        shortDesc: "Desktop manga archiver and downloader from multiple web sources.",
        longDesc: "Free Manga Downloader (FMD) is an open-source application written in Object Pascal. It allows users to search, download, and archive manga from dozens of online public repositories.",
        license: "GPLv2",
        version: "v2.1.22",
        downloads: 82000,
        rating: 4.6,
        repo: "https://github.com/riderkick/fmd",
        downloadUrl: "https://github.com/riderkick/fmd/releases/download/v2.1.22/fmd-win64.zip",
        updated: "2026-05-01"
    },
    {
        id: "stackedit",
        name: "StackEdit",
        category: "Productivity",
        developer: "Benoit Schweblin",
        shortDesc: "Full-featured open source Markdown editor based on PageDown.",
        longDesc: "StackEdit is a very robust open-source Markdown editor. It can sync documents with Google Drive and Dropbox, publish posts to GitHub, Blogger, and WordPress, and supports inline LaTeX and UML diagrams.",
        license: "Apache 2.0",
        version: "v5.14.0",
        downloads: 140000,
        rating: 4.8,
        repo: "https://github.com/benweet/stackedit",
        downloadUrl: "https://github.com/benweet/stackedit/archive/refs/tags/v5.14.0.zip",
        updated: "2026-04-20"
    },
    {
        id: "png-mng-home",
        name: "PNG MNG Home",
        category: "Graphics",
        developer: "Libpng Project",
        shortDesc: "Official libraries and resources for PNG and MNG/JNG image formats.",
        longDesc: "The PNG and MNG Home site represents the official source repository for the portable network graphics reference libraries (libpng) and Multiple-image Network Graphics (MNG) format specifications.",
        license: "Libpng License",
        version: "v1.6.43",
        downloads: 350000,
        rating: 4.7,
        repo: "https://github.com/pnggroup/libpng",
        downloadUrl: "https://sourceforge.net/projects/libpng/files/latest/download",
        updated: "2026-05-08"
    },
    {
        id: "tartube",
        name: "Tartube",
        category: "Multimedia",
        developer: "Alistair Bain",
        shortDesc: "GUI front-end for youtube-dl and yt-dlp to download video streams.",
        longDesc: "Tartube is a graphic user interface for downloading videos from YouTube, SoundCloud, and other sites, based on the backend yt-dlp downloader engine, providing folder organization and media players.",
        license: "GPLv3",
        version: "v2.5.0",
        downloads: 48000,
        rating: 4.7,
        repo: "https://github.com/axcore/tartube",
        downloadUrl: "https://github.com/axcore/tartube/releases/download/v2.5.0/Tartube_Setup_v2.5.0.exe",
        updated: "2026-05-12"
    },
    {
        id: "scrcpy-gui",
        name: "Scrcpy GUI",
        category: "Utilities",
        developer: "Scrcpy GUI team",
        shortDesc: "A lightweight graphic user interface dashboard for scrcpy.",
        longDesc: "Scrcpy GUI provides a clean graphical control panel for the command-line scrcpy mirroring tool, allowing users to toggle resolution, frame rates, and ADB connections with one click.",
        license: "Apache 2.0",
        version: "v2.4.1",
        downloads: 86000,
        rating: 4.8,
        repo: "https://github.com/tommy351/scrcpy-gui",
        downloadUrl: "https://github.com/tommy351/scrcpy-gui/releases/download/v2.4.1/scrcpy-gui-win64.zip",
        updated: "2026-04-18"
    },
    {
        id: "winpenpack",
        name: "winPenPack",
        category: "Utilities",
        developer: "winPenPack Team",
        shortDesc: "Portable software suite environment manager for USB flash drives.",
        longDesc: "winPenPack is an open-source application manager that groups multiple portable software packages, letting users launch all programs off a USB drive with unified menus.",
        license: "GPLv2",
        version: "v10.4",
        downloads: 34000,
        rating: 4.4,
        repo: "https://sourceforge.net/projects/winpenpack/",
        downloadUrl: "https://sourceforge.net/projects/winpenpack/files/latest/download",
        updated: "2026-01-15"
    },
    {
        id: "tv-browser",
        name: "TV-Browser",
        category: "Multimedia",
        developer: "TV-Browser Developer Group",
        shortDesc: "Java-based EPG (Electronic Program Guide) displaying TV schedules.",
        longDesc: "TV-Browser is a Java-based TV guide program that displays TV and radio program schedules from hundreds of national and international channels in a customizable grid.",
        license: "GPLv3",
        version: "v4.5.3",
        downloads: 45000,
        rating: 4.5,
        repo: "https://github.com/tv-browser/tvbrowser",
        downloadUrl: "https://sourceforge.net/projects/tvbrowser/files/latest/download",
        updated: "2026-03-22"
    },
    {
        id: "rezku-pos",
        name: "Rezku POS",
        category: "Productivity",
        developer: "Rezku",
        shortDesc: "IPad point-of-sale system wrapper for restaurants and hospitality.",
        longDesc: "Rezku Point of Sale is a premium cloud-based POS software solution designed for restaurant management, handling orders, table mapping, payments, and real-time sales reporting.",
        license: "Proprietary",
        version: "v6.2.0",
        downloads: 9500,
        rating: 4.6,
        repo: "https://rezku.com",
        downloadUrl: "https://rezku.com",
        updated: "2026-04-10"
    },
    {
        id: "terracognita",
        name: "TerraCognita",
        category: "Development",
        developer: "Cycloid",
        shortDesc: "Infrastructure-to-code tool to import existing cloud to Terraform.",
        longDesc: "TerraCognita reads existing infrastructure from cloud providers (AWS, GCP, Azure) and exports it into standard Terraform configurations (.tf files) and state records.",
        license: "MIT",
        version: "v0.8.3",
        downloads: 18000,
        rating: 4.6,
        repo: "https://github.com/cycloidio/terracognita",
        downloadUrl: "https://github.com/cycloidio/terracognita/releases/download/v0.8.3/terracognita-windows-amd64.exe",
        updated: "2026-03-28"
    },
    {
        id: "reveal-js",
        name: "reveal.js",
        category: "Development",
        developer: "Hakim El Hattab",
        shortDesc: "HTML presentation framework letting you build slides in HTML.",
        longDesc: "reveal.js is an open-source HTML presentation framework. It enables anyone with a web browser to create beautiful presentations using nested slides, Markdown, and custom CSS effects.",
        license: "MIT",
        version: "v5.1.0",
        downloads: 110000,
        rating: 4.8,
        repo: "https://github.com/hakimel/reveal.js",
        downloadUrl: "https://github.com/hakimel/reveal.js/archive/refs/tags/5.1.0.zip",
        updated: "2026-05-02"
    },
    {
        id: "fbvlc",
        name: "fbvlc",
        category: "Multimedia",
        developer: "fbvlc contributors",
        shortDesc: "Facebook video streaming interface plugin for VLC media player.",
        longDesc: "fbvlc is a helper utility and VLC plug-in enabling users to parse, resolve, and stream Facebook video posts directly inside the VLC media player core engine.",
        license: "GPLv2",
        version: "v1.1.2",
        downloads: 15000,
        rating: 4.2,
        repo: "https://github.com/fbvlc/fbvlc",
        downloadUrl: "https://github.com/fbvlc/fbvlc/archive/refs/tags/v1.1.2.zip",
        updated: "2026-01-10"
    },
    {
        id: "openvrml",
        name: "OpenVRML",
        category: "Utilities",
        developer: "Braden McDaniel",
        shortDesc: "A portable VRML and X3D runtime and rendering engine.",
        longDesc: "OpenVRML is a portable VRML and X3D runtime library. It provides C++ libraries to parse, render, and interact with VRML97 and X3D files inside browser plug-ins or native desktop windows.",
        license: "LGPLv2.1",
        version: "v0.18.9",
        downloads: 12000,
        rating: 4.1,
        repo: "https://sourceforge.net/projects/openvrml/",
        downloadUrl: "https://sourceforge.net/projects/openvrml/files/latest/download",
        updated: "2025-11-20"
    },
    {
        id: "jimp",
        name: "Jimp",
        category: "Development",
        developer: "Oliver Moran",
        shortDesc: "JavaScript Image Manipulation Program written in pure JavaScript.",
        longDesc: "Jimp is an image processing library for Node written entirely in JavaScript, with zero native dependencies, supporting file formats like PNG, JPEG, BMP, and GIF.",
        license: "MIT",
        version: "v0.22.12",
        downloads: 240000,
        rating: 4.7,
        repo: "https://github.com/jimp-dev/jimp",
        downloadUrl: "https://github.com/jimp-dev/jimp/archive/refs/tags/v0.22.12.zip",
        updated: "2026-04-15"
    },
    {
        id: "umami",
        name: "Umami",
        category: "Development",
        developer: "Mike Cao",
        shortDesc: "Simple, fast, privacy-focused open source website analytics.",
        longDesc: "Umami is a self-hosted, privacy-focused alternative to Google Analytics. It is fast, lightweight, respects GDPR compliance, and collects no personal details from users.",
        license: "MIT",
        version: "v2.12.0",
        downloads: 68000,
        rating: 4.9,
        repo: "https://github.com/umami-software/umami",
        downloadUrl: "https://github.com/umami-software/umami/releases/download/v2.12.0/umami.zip",
        updated: "2026-05-11"
    },
    {
        id: "gnuplot-py",
        name: "Gnuplot.py",
        category: "Development",
        developer: "Michael Haggerty",
        shortDesc: "Python interface to the gnuplot mathematical plotting program.",
        longDesc: "Gnuplot.py is a Python module that interfaces with gnuplot, allowing developers to generate mathematical plots, graphs, and arrays directly from Python scripts.",
        license: "LGPLv2.1",
        version: "v1.8",
        downloads: 22000,
        rating: 4.2,
        repo: "https://sourceforge.net/projects/gnuplot-py/",
        downloadUrl: "https://sourceforge.net/projects/gnuplot-py/files/latest/download",
        updated: "2025-12-05"
    },
    {
        id: "phplot",
        name: "PHPlot",
        category: "Development",
        developer: "PHPlot team",
        shortDesc: "PHP graphics library for creating charts and dynamic plots.",
        longDesc: "PHPlot is a C-like PHP graphics library for creating scientific charts, bar graphs, and line graphs dynamically from PHP server scripts using the GD library.",
        license: "LGPLv2.1",
        version: "v6.2.0",
        downloads: 34000,
        rating: 4.3,
        repo: "https://sourceforge.net/projects/phplot/",
        downloadUrl: "https://sourceforge.net/projects/phplot/files/latest/download",
        updated: "2026-01-20"
    },
    {
        id: "geshi",
        name: "GeSHi",
        category: "Development",
        developer: "Nigel McNie",
        shortDesc: "Generic Syntax Highlighter script library written in PHP.",
        longDesc: "GeSHi (Generic Syntax Highlighter) is a php library that highlights code blocks dynamically, supporting over 200 programming languages and markup formats.",
        license: "GPLv2",
        version: "v1.0.9",
        downloads: 58000,
        rating: 4.4,
        repo: "https://github.com/GeSHi/geshi-1.0",
        downloadUrl: "https://sourceforge.net/projects/geshi/files/latest/download",
        updated: "2026-02-14"
    },
    {
        id: "coppermine",
        name: "Coppermine Photo Gallery",
        category: "Graphics",
        developer: "Coppermine Dev Team",
        shortDesc: "Easily customizable PHP web photo gallery script suite.",
        longDesc: "Coppermine Photo Gallery is an easily customizable, multi-purpose PHP photo gallery script that supports user submissions, picture reviews, and automatic thumbnails.",
        license: "GPLv3",
        version: "v1.6.28",
        downloads: 42000,
        rating: 4.4,
        repo: "https://github.com/coppermine-gallery/cpg1.6.x",
        downloadUrl: "https://github.com/coppermine-gallery/cpg1.6.x/archive/refs/tags/v1.6.28.zip",
        updated: "2026-03-25"
    },
    {
        id: "webchimera",
        name: "WebChimera",
        category: "Multimedia",
        developer: "WebChimera team",
        shortDesc: "Web plugin to parse and stream VLC media engine in browser frames.",
        longDesc: "WebChimera is a software wrapper allowing developers to embed VLC video media streaming nodes directly inside electron frameworks and HTML web panels.",
        license: "LGPLv2.1",
        version: "v0.2.7",
        downloads: 18000,
        rating: 4.3,
        repo: "https://github.com/RSATom/WebChimera",
        downloadUrl: "https://github.com/RSATom/WebChimera/archive/refs/tags/v0.2.7.zip",
        updated: "2025-10-15"
    },
    {
        id: "xdm",
        name: "XDM (Xtreme Download Manager)",
        category: "Utilities",
        developer: "Subhra Das Gupta",
        shortDesc: "Advanced download manager boosting speeds up to 500%.",
        longDesc: "Xtreme Download Manager is a powerful tool to increase download speed, save videos from YouTube and other streaming sites, resume broken downloads, and schedule transfers.",
        license: "GPLv2",
        version: "v8.0.29",
        downloads: 420000,
        rating: 4.8,
        repo: "https://github.com/subhra74/xdm",
        downloadUrl: "https://github.com/subhra74/xdm/releases/download/v8.0.29/xdm-setup-8.0.29.msi",
        updated: "2026-05-02"
    },
    {
        id: "base64encoder",
        name: "Base64encoder",
        category: "Utilities",
        developer: "Base64 project",
        shortDesc: "Simple desktop utility to encode and decode base64 strings.",
        longDesc: "Base64encoder is a simple open source utility that lets you quickly encode and decode base64 strings and files without network uploads.",
        license: "MIT",
        version: "v1.2.0",
        downloads: 22000,
        rating: 4.3,
        repo: "https://github.com/base64/base64encoder",
        downloadUrl: "https://github.com/base64/base64encoder/archive/refs/tags/v1.2.0.zip",
        updated: "2025-08-10"
    },
    {
        id: "vnc-address-book",
        name: "VNC Address Book",
        category: "Utilities",
        developer: "VNCAB team",
        shortDesc: "VNC profile manager and address book client launcher.",
        longDesc: "VNC Address Book is a clean profile manager that lets you organize VNC hostnames, credentials, and ports to quickly launch VNC viewer sessions.",
        license: "GPLv3",
        version: "v1.4.0",
        downloads: 18000,
        rating: 4.4,
        repo: "https://sourceforge.net/projects/vncaddressbook/",
        downloadUrl: "https://sourceforge.net/projects/vncaddressbook/files/latest/download",
        updated: "2026-01-18"
    },
    {
        id: "filesearch",
        name: "FileSearch",
        category: "Utilities",
        developer: "FileSearch project",
        shortDesc: "Ultra-fast desktop file searching tool indexer for Windows.",
        longDesc: "FileSearch is an open source file indexing utility that scans local NTFS and FAT hard drives in seconds to find files by name instantly.",
        license: "MIT",
        version: "v2.1.0",
        downloads: 35000,
        rating: 4.5,
        repo: "https://github.com/filesearch/filesearch",
        downloadUrl: "https://github.com/filesearch/filesearch/archive/refs/tags/v2.1.0.zip",
        updated: "2026-03-05"
    },
    {
        id: "barbecue-barcode",
        name: "Barbecue Barcode",
        category: "Development",
        developer: "Barbecue Contributors",
        shortDesc: "Java barcode generator library supporting multiple symbologies.",
        longDesc: "Barbecue is an open-source Java library that allows the creation of barcodes in various formats, supporting SVG, PNG, and PDF outputs.",
        license: "BSD-like",
        version: "v1.5.0",
        downloads: 24000,
        rating: 4.2,
        repo: "https://sourceforge.net/projects/barbecue/",
        downloadUrl: "https://sourceforge.net/projects/barbecue/files/latest/download",
        updated: "2025-09-20"
    },
    {
        id: "report-net",
        name: "Report.NET",
        category: "Development",
        developer: "Report.NET team",
        shortDesc: "C# library to generate PDF documents on the fly.",
        longDesc: "Report.NET is a C# library for generating PDF documents dynamically, supporting tables, graphs, custom scripts, and page margins.",
        license: "LGPLv2.1",
        version: "v0.9.8",
        downloads: 28000,
        rating: 4.3,
        repo: "https://sourceforge.net/projects/reportnet/",
        downloadUrl: "https://sourceforge.net/projects/reportnet/files/latest/download",
        updated: "2025-11-12"
    },
    {
        id: "j-qrcode",
        name: "J QR Code Generator",
        category: "Development",
        developer: "JQRCode Contributors",
        shortDesc: "Java QR Code generator and decoder library.",
        longDesc: "J QR Code Generator is a Java-based open source library to parse, encode, and render high-resolution QR codes dynamically.",
        license: "MIT",
        version: "v1.2.0",
        downloads: 32000,
        rating: 4.4,
        repo: "https://github.com/jqrcode/generator",
        downloadUrl: "https://github.com/jqrcode/generator/archive/refs/tags/v1.2.0.zip",
        updated: "2026-02-18"
    },
    {
        id: "crystal-reports-php",
        name: "Crystal Reports PHP Wrapper",
        category: "Development",
        developer: "CrystalPHP team",
        shortDesc: "PHP extension script to render Crystal Reports templates.",
        longDesc: "Crystal Reports Preview em PHP is a library that allows PHP scripts to load, parse, and render SAP Crystal Reports templates inside browser web sheets.",
        license: "MIT",
        version: "v1.0.4",
        downloads: 14000,
        rating: 4.2,
        repo: "https://github.com/crystalphp/reports-preview",
        downloadUrl: "https://github.com/crystalphp/reports-preview/archive/refs/tags/v1.0.4.zip",
        updated: "2025-07-20"
    },
    {
        id: "php-pdf-factory",
        name: "Php Pdf Factory",
        category: "Development",
        developer: "PDF Factory contributors",
        shortDesc: "High-speed PHP library to create PDF files.",
        longDesc: "Php Pdf Factory is an open source PHP library designed for generating highly structured PDF files, reports, and invoices dynamically from database models.",
        license: "MIT",
        version: "v2.1.0",
        downloads: 19000,
        rating: 4.3,
        repo: "https://github.com/pdf-factory/php-pdf",
        downloadUrl: "https://github.com/pdf-factory/php-pdf/archive/refs/tags/v2.1.0.zip",
        updated: "2026-01-25"
    },
    {
        id: "wphotoprintservice",
        name: "wPhotoPrintService",
        category: "Utilities",
        developer: "wPhotoPrint team",
        shortDesc: "Windows background service to schedule local photo prints.",
        longDesc: "wPhotoPrintService is a lightweight Windows service utility that indexes print directories to dispatch and schedule print jobs automatically to local printer hardware.",
        license: "MIT",
        version: "v1.1.0",
        downloads: 11000,
        rating: 4.1,
        repo: "https://github.com/wphotoprint/service",
        downloadUrl: "https://github.com/wphotoprint/service/archive/refs/tags/v1.1.0.zip",
        updated: "2025-10-10"
    },
    {
        id: "telegram-desktop",
        name: "Telegram Desktop",
        category: "Security",
        developer: "Telegram FZ-LLC",
        shortDesc: "Fast and secure desktop messaging client with cloud sync.",
        longDesc: "Telegram is a cloud-based mobile and desktop messaging app with a focus on security and speed. It offers end-to-end encrypted voice calls and self-destructing secret chats, supporting massive groups and file sharing.",
        license: "GPLv3",
        version: "v5.1.7",
        downloads: 1500000,
        rating: 4.8,
        repo: "https://github.com/telegramdesktop/tdesktop",
        downloadUrl: "https://telegram.org/dl/desktop/win64",
        updated: "2026-05-18"
    },
    {
        id: "matroska",
        name: "Matroska Tools",
        category: "Multimedia",
        developer: "Matroska Association",
        shortDesc: "Official tools and specifications for the Matroska MKV container format.",
        longDesc: "Matroska Tools includes a suite of command-line and graphical applications to inspect, verify, and parse MKV, MKA, and MKS media files based on the open-standard Matroska container format.",
        license: "GPLv2",
        version: "v1.4.0",
        downloads: 180000,
        rating: 4.6,
        repo: "https://github.com/Matroska-Org/foundation-source",
        downloadUrl: "https://sourceforge.net/projects/matroska/files/latest/download",
        updated: "2026-02-10"
    },
    {
        id: "snap7",
        name: "Snap7",
        category: "Development",
        developer: "Davide Nardella",
        shortDesc: "Open source Ethernet communication suite for Siemens S7 PLCs.",
        longDesc: "Snap7 is an open-source, multi-platform Ethernet communication suite for interfacing natively with Siemens S7 PLCs (S7 300/400/1200/1500) and WinAC Software Controllers.",
        license: "LGPLv3",
        version: "v1.4.2",
        downloads: 24000,
        rating: 4.5,
        repo: "https://github.com/rscada/libsnap7",
        downloadUrl: "https://sourceforge.net/projects/snap7/files/latest/download",
        updated: "2026-03-01"
    },
    {
        id: "wsjt",
        name: "WSJT-X",
        category: "Utilities",
        developer: "Joe Taylor, K1JT",
        shortDesc: "Weak-signal digital communication software for ham radio.",
        longDesc: "WSJT-X facilitates digital amateur radio communication using weak signals. It implements protocols like FT8, JT65, and MSK144, designed for making contacts under extremely low signal-to-noise conditions.",
        license: "GPLv3",
        version: "v2.7.0",
        downloads: 48000,
        rating: 4.8,
        repo: "https://github.com/k1jt/wsjtx",
        downloadUrl: "https://sourceforge.net/projects/wsjt/files/latest/download",
        updated: "2026-04-15"
    },
    {
        id: "emule",
        name: "eMule",
        category: "Utilities",
        developer: "eMule Team",
        shortDesc: "Classic open source peer-to-peer file sharing client.",
        longDesc: "eMule is a classic, highly popular open-source P2P file-sharing application that connects to the eDonkey network and Kad DHT network to share files with millions of peers.",
        license: "GPLv2",
        version: "v0.60d",
        downloads: 320000,
        rating: 4.4,
        repo: "https://github.com/irfree/eMule",
        downloadUrl: "https://sourceforge.net/projects/emule/files/latest/download",
        updated: "2026-02-18"
    },
    {
        id: "realterm",
        name: "RealTerm",
        category: "Utilities",
        developer: "RealTerm Contributors",
        shortDesc: "Developer terminal program specially designed for serial and TCP ports.",
        longDesc: "RealTerm is an engineer's terminal program specially designed for capturing, controlling and debugging binary and difficult data streams on serial ports, USB serial converters, and TCP connections.",
        license: "GPLv2",
        version: "v3.0.1.44",
        downloads: 110000,
        rating: 4.5,
        repo: "https://sourceforge.net/projects/realterm/",
        downloadUrl: "https://sourceforge.net/projects/realterm/files/latest/download",
        updated: "2026-01-20"
    },
    {
        id: "beebeep",
        name: "BeeBEEP",
        category: "Utilities",
        developer: "Marco Mastroddi",
        shortDesc: "Free, open source, secure lan-to-lan office messenger.",
        longDesc: "BeeBEEP is a secure network office messenger that lets you chat and share files with colleagues inside your local area network (LAN) without requiring an internet server.",
        license: "GPLv3",
        version: "v5.8.4",
        downloads: 38000,
        rating: 4.6,
        repo: "https://github.com/marco-mastroddi/beebeep",
        downloadUrl: "https://sourceforge.net/projects/beebeep/files/latest/download",
        updated: "2026-03-12"
    },
    {
        id: "issabelpbx",
        name: "IssabelPBX",
        category: "Productivity",
        developer: "Issabel Foundation",
        shortDesc: "Open source IP-PBX communication platform.",
        longDesc: "IssabelPBX is a complete open source Unified Communications software suite that configures IP-PBX, email, instant messaging, and call center features inside Asterisk telephony engines.",
        license: "GPLv2",
        version: "v4.0.0",
        downloads: 19000,
        rating: 4.4,
        repo: "https://github.com/IssabelFoundation/issabel",
        downloadUrl: "https://sourceforge.net/projects/issabel/files/latest/download",
        updated: "2026-02-05"
    },
    {
        id: "qmodmaster",
        name: "QModMaster",
        category: "Development",
        developer: "QModMaster Contributors",
        shortDesc: "A Qt-based Modbus master simulator tool.",
        longDesc: "QModMaster is a free Qt-based application that simulates a Modbus master device. It features a bus monitor for inspecting raw transmission frames, supporting RTU and TCP modes.",
        license: "GPLv2",
        version: "v0.5.3",
        downloads: 15000,
        rating: 4.5,
        repo: "https://sourceforge.net/projects/qmodmaster/",
        downloadUrl: "https://sourceforge.net/projects/qmodmaster/files/latest/download",
        updated: "2026-01-18"
    },
    {
        id: "fldigi",
        name: "fldigi",
        category: "Utilities",
        developer: "Dave Freese, W1HKJ",
        shortDesc: "Digital modem program for ham radio communications.",
        longDesc: "fldigi is an open-source digital modem program that operates in conjunction with a ham radio transceiver to send and receive text messages via radio signals, supporting PSK31, RTTY, and MFSK.",
        license: "GPLv3",
        version: "v4.2.04",
        downloads: 28000,
        rating: 4.7,
        repo: "https://sourceforge.net/projects/fldigi/",
        downloadUrl: "https://sourceforge.net/projects/fldigi/files/latest/download",
        updated: "2026-03-25"
    },
    {
        id: "universal-gcode-sender",
        name: "Universal G-Code Sender",
        category: "Utilities",
        developer: "Will Winder",
        shortDesc: "Full-featured gcode sender for CNC controllers.",
        longDesc: "Universal Gcode Sender (UGS) is a Java-based interface program designed for sending G-code commands to CNC controllers like GRBL, TinyG, g2core and Smoothieware.",
        license: "GPLv3",
        version: "v2.1.8",
        downloads: 54000,
        rating: 4.8,
        repo: "https://github.com/winder/Universal-G-Code-Sender",
        downloadUrl: "https://github.com/winder/Universal-G-Code-Sender/releases/download/v2.1.8/UniversalGcodeSender.zip",
        updated: "2026-04-10"
    },
    {
        id: "shareaza",
        name: "Shareaza",
        category: "Utilities",
        developer: "Shareaza Development Team",
        shortDesc: "Multi-network peer-to-peer file sharing client.",
        longDesc: "Shareaza is a P2P file sharing client for Windows that supports gnutella, Gnutella2, eDonkey, BitTorrent, and FTP/HTTP protocols, with advanced file hashing and library organization.",
        license: "GPLv2",
        version: "v2.7.10.2",
        downloads: 92000,
        rating: 4.3,
        repo: "https://sourceforge.net/projects/shareaza/",
        downloadUrl: "https://sourceforge.net/projects/shareaza/files/latest/download",
        updated: "2026-02-28"
    },
    {
        id: "pidgin",
        name: "Pidgin IM",
        category: "Utilities",
        developer: "Pidgin Development Team",
        shortDesc: "Multi-protocol instant messaging client combining accounts.",
        longDesc: "Pidgin is an easy to use and free chat client used by millions. It connects to multiple chat networks simultaneously, including IRC, XMPP, ICQ, and more, in a unified buddy list.",
        license: "GPLv2",
        version: "v2.14.13",
        downloads: 140000,
        rating: 4.6,
        repo: "https://github.com/pidgin/pidgin",
        downloadUrl: "https://sourceforge.net/projects/pidgin/files/latest/download",
        updated: "2026-03-15"
    },
    {
        id: "mbox-viewer",
        name: "Windows MBox Viewer",
        category: "Utilities",
        developer: "MBox Viewer contributors",
        shortDesc: "Lightweight viewer for Mbox email archive files.",
        longDesc: "Windows Mbox Viewer is a free desktop utility to read large MBox email archive databases (e.g. from Google Takeout or Thunderbird backups) without importing them into an active mail client.",
        license: "GPLv3",
        version: "v1.0.3.5",
        downloads: 58000,
        rating: 4.5,
        repo: "https://sourceforge.net/projects/mbox-viewer/",
        downloadUrl: "https://sourceforge.net/projects/mbox-viewer/files/latest/download",
        updated: "2026-02-20"
    },
    {
        id: "utorrent",
        name: "\u00b5Torrent Client",
        category: "Utilities",
        developer: "BitTorrent Inc.",
        shortDesc: "Tiny, fast, and feature-rich BitTorrent client.",
        longDesc: "\u00b5Torrent is a tiny BitTorrent client for Windows. It provides high-speed torrent downloads, scheduling, bandwidth management, and DHT support in a lightweight package.",
        license: "Proprietary",
        version: "v3.6.0",
        downloads: 1850000,
        rating: 4.5,
        repo: "https://www.utorrent.com",
        downloadUrl: "https://www.utorrent.com/downloads/win",
        updated: "2026-05-10"
    },
    {
        id: "ayugram",
        name: "AyuGram Desktop",
        category: "Security",
        developer: "AyuGram Project",
        shortDesc: "A feature-rich Telegram Desktop client fork with privacy patches.",
        longDesc: "AyuGram Desktop is a modified fork of Telegram Desktop. It includes advanced privacy options, message history storage, ghost mode, custom themes, and ad-blocking.",
        license: "GPLv3",
        version: "v4.16.8",
        downloads: 48000,
        rating: 4.7,
        repo: "https://github.com/AyuGram/AyuGram",
        downloadUrl: "https://github.com/AyuGram/AyuGram/releases/download/v4.16.8/ayugram-desktop-windows-x64.zip",
        updated: "2026-05-14"
    },
    {
        id: "cubicsdr",
        name: "CubicSDR",
        category: "Multimedia",
        developer: "Charles J. Cliffe",
        shortDesc: "Cross-platform Software Defined Radio (SDR) visualization application.",
        longDesc: "CubicSDR is a cross-platform Software-Defined Radio application. It lets you navigate radio spectrums, visually demodulate and decode signals, and listen to broadcasts using USB SDR hardware.",
        license: "GPLv2",
        version: "v0.2.8",
        downloads: 32000,
        rating: 4.6,
        repo: "https://github.com/cjcliffe/CubicSDR",
        downloadUrl: "https://github.com/cjcliffe/CubicSDR/releases/download/v0.2.8/CubicSDR-0.2.8-win64.exe",
        updated: "2026-03-02"
    },
    {
        id: "qprompt",
        name: "QPrompt",
        category: "Productivity",
        developer: "Javier O. Cordero Perez",
        shortDesc: "Modern teleprompter software for creators and journalists.",
        longDesc: "QPrompt is an open-source teleprompter software. It features smooth scrolling, dual-screen overlays, mirror reflections, rich text editing, and dynamic speech timers.",
        license: "GPLv3",
        version: "v1.2.0",
        downloads: 14000,
        rating: 4.6,
        repo: "https://github.com/Cuperino/qprompt-editor",
        downloadUrl: "https://github.com/Cuperino/qprompt-editor/releases/download/v1.2.0/qprompt-v1.2.0-windows-64.exe",
        updated: "2026-04-18"
    },
    {
        id: "yat",
        name: "YAT (Yet Another Terminal)",
        category: "Utilities",
        developer: "YAT Contributors",
        shortDesc: "Serial terminal program for engineering communication.",
        longDesc: "YAT is a developer terminal program for engineering communication on serial ports, TCP/IP sockets, and UDP channels, supporting binary, hex, and text capture.",
        license: "GPLv3",
        version: "v2.5.1",
        downloads: 78000,
        rating: 4.6,
        repo: "https://sourceforge.net/projects/y-a-terminal/",
        downloadUrl: "https://sourceforge.net/projects/y-a-terminal/files/latest/download",
        updated: "2026-01-25"
    },
    {
        id: "hfs",
        name: "HFS (HTTP File Server)",
        category: "Utilities",
        developer: "Massimo Melina",
        shortDesc: "File sharing web server running on local computer.",
        longDesc: "HFS is a user-friendly open-source file sharing web server. It lets you share files from your local folders securely through any standard web browser link.",
        license: "GPLv3",
        version: "v2.3m",
        downloads: 150000,
        rating: 4.6,
        repo: "https://github.com/rejetto/hfs",
        downloadUrl: "https://sourceforge.net/projects/hfs/files/latest/download",
        updated: "2026-03-20"
    },
    {
        id: "rats",
        name: "Rough Auditing Tool for Security (RATS)",
        category: "Security",
        developer: "CERN / Secure Software Inc.",
        shortDesc: "Open source code scanner to audit security vulnerabilities.",
        longDesc: "RATS is an open-source static code scanner that audits C, C++, Perl, PHP, and Python codebases to detect buffer overflows, race conditions, and insecure API calls.",
        license: "GPLv2",
        version: "v2.4",
        downloads: 24000,
        rating: 4.3,
        repo: "https://github.com/cern/rats",
        downloadUrl: "https://github.com/cern/rats/archive/refs/tags/v2.4.zip",
        updated: "2025-11-12"
    },
    {
        id: "rss-guard",
        name: "RSS Guard",
        category: "Productivity",
        developer: "Martin Rotter",
        shortDesc: "Fast and lightweight RSS/Atom feed reader.",
        longDesc: "RSS Guard is a fast, lightweight, and multi-platform RSS/Atom feed reader. It supports sync with online services like Tiny Tiny RSS, Nextcloud News, Inoreader, and Feedly.",
        license: "GPLv3",
        version: "v4.6.4",
        downloads: 32000,
        rating: 4.6,
        repo: "https://github.com/martinrotter/rssguard",
        downloadUrl: "https://github.com/martinrotter/rssguard/releases/download/v4.6.4/rssguard-win64-setup.exe",
        updated: "2026-05-01"
    },
    {
        id: "phpmailer",
        name: "PHPMailer",
        category: "Development",
        developer: "Marcus Bointon",
        shortDesc: "Popular code library to send emails from PHP safely.",
        longDesc: "PHPMailer is a classic, highly popular code library to send emails from PHP safely. It supports SMTP, HTML emails, attachments, and SSL/TLS secure connections.",
        license: "LGPLv2.1",
        version: "v6.9.1",
        downloads: 480000,
        rating: 4.7,
        repo: "https://github.com/PHPMailer/PHPMailer",
        downloadUrl: "https://github.com/PHPMailer/PHPMailer/archive/refs/tags/v6.9.1.zip",
        updated: "2026-04-18"
    },
    {
        id: "dcplusplus",
        name: "DC++ Client",
        category: "Utilities",
        developer: "Jacek Sieka",
        shortDesc: "Direct Connect file sharing client for Windows.",
        longDesc: "DC++ is an open source client for Windows that connects to the Direct Connect network, allowing files to be shared and chat rooms to be accessed in a decentralized network.",
        license: "GPLv2",
        version: "v0.88",
        downloads: 180000,
        rating: 4.4,
        repo: "https://sourceforge.net/projects/dcplusplus/",
        downloadUrl: "https://sourceforge.net/projects/dcplusplus/files/latest/download",
        updated: "2026-01-10"
    },
    {
        id: "armcord",
        name: "ArmCord",
        category: "Utilities",
        developer: "ArmCord team",
        shortDesc: "Lightweight Discord client fork based on Electron.",
        longDesc: "ArmCord is a custom lightweight Discord client focusing on low resource usage, security, privacy patches, and custom plugin frameworks.",
        license: "GPLv3",
        version: "v3.2.6",
        downloads: 58000,
        rating: 4.7,
        repo: "https://github.com/ArmCord/ArmCord",
        downloadUrl: "https://github.com/ArmCord/ArmCord/releases/download/v3.2.6/ArmCord-Setup-3.2.6.exe",
        updated: "2026-04-20"
    },
    {
        id: "synctrayzor",
        name: "SyncTrayzor",
        category: "Utilities",
        developer: "Antony Male",
        shortDesc: "Windows system tray utility and launcher wrapper for Syncthing.",
        longDesc: "SyncTrayzor wraps Syncthing in a Windows system tray client, providing automatic startup, system tray icons, alert popups, and simple directory sharing.",
        license: "MIT",
        version: "v1.1.29",
        downloads: 92000,
        rating: 4.8,
        repo: "https://github.com/canton7/SyncTrayzor",
        downloadUrl: "https://github.com/canton7/SyncTrayzor/releases/download/v1.1.29/SyncTrayzorSetup-x64.exe",
        updated: "2026-05-01"
    },
    {
        id: "acrylic-dns",
        name: "Acrylic DNS Proxy",
        category: "Security",
        developer: "Massimo Melina",
        shortDesc: "Local DNS proxy caching server to speed up web loading.",
        longDesc: "Acrylic is a local DNS proxy caching server that speeds up web page loading times by caching DNS query answers locally and supporting custom HOSTS file extensions.",
        license: "GPLv3",
        version: "v2.2.0",
        downloads: 35000,
        rating: 4.6,
        repo: "https://sourceforge.net/projects/acrylic/",
        downloadUrl: "https://sourceforge.net/projects/acrylic/files/latest/download",
        updated: "2026-02-12"
    },
    {
        id: "jackett",
        name: "Jackett",
        category: "Utilities",
        developer: "Jackett Contributors",
        shortDesc: "API support wrapper for public and private torrent trackers.",
        longDesc: "Jackett acts as a proxy server. It translates API queries from apps like Sonarr and Radarr into HTTP requests for public and private torrent trackers.",
        license: "GPLv2",
        version: "v0.21.2",
        downloads: 110000,
        rating: 4.8,
        repo: "https://github.com/Jackett/Jackett",
        downloadUrl: "https://github.com/Jackett/Jackett/releases/download/v0.21.2/Jackett.Installer.Windows.exe",
        updated: "2026-05-15"
    },
    {
        id: "moodle",
        name: "Moodle LMS",
        category: "Productivity",
        developer: "Moodle HQ",
        shortDesc: "Open source Learning Management System (LMS) core.",
        longDesc: "Moodle is a robust open-source learning platform designed to provide educators, administrators and learners with a single secure, unified system to create personalized learning environments.",
        license: "GPLv3",
        version: "v4.4.1",
        downloads: 380000,
        rating: 4.5,
        repo: "https://github.com/moodle/moodle",
        downloadUrl: "https://github.com/moodle/moodle/archive/refs/tags/v4.4.1.zip",
        updated: "2026-05-08"
    },
    {
        id: "emailrelay",
        name: "E-MailRelay",
        category: "Utilities",
        developer: "EMailRelay project",
        shortDesc: "SMTP proxy and store-and-forward email relay server.",
        longDesc: "E-MailRelay is a custom SMTP proxy server. It intercepts, logs, edits, and queues SMTP email traffic before forwarding it to downstream SMTP mail hosts.",
        license: "GPLv3",
        version: "v2.6",
        downloads: 18000,
        rating: 4.3,
        repo: "https://sourceforge.net/projects/emailrelay/",
        downloadUrl: "https://sourceforge.net/projects/emailrelay/files/latest/download",
        updated: "2026-01-20"
    },
    {
        id: "gsoap",
        name: "gSOAP Toolkit",
        category: "Development",
        developer: "Genivia Inc.",
        shortDesc: "C/C++ Web Services and XML SOAP data binding compiler.",
        longDesc: "gSOAP is a high-performance suite of C/C++ libraries and compilers to generate SOAP, XML, and REST JSON data binding interfaces for web services.",
        license: "GPLv2",
        version: "v2.8.135",
        downloads: 42000,
        rating: 4.4,
        repo: "https://sourceforge.net/projects/gsoap2/",
        downloadUrl: "https://sourceforge.net/projects/gsoap2/files/latest/download",
        updated: "2026-03-25"
    }




];

// SVG Icon Database for beautiful render
const APP_ICONS = {
    vscodium: `<img src="https://upload.wikimedia.org/wikipedia/commons/5/56/VSCodium_Logo.png" alt="VSCodium Icon">`,
    vlc: `<img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/VLC_Icon.svg" alt="VLC Icon">`,
    "obs-studio": `<img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/OBS_Studio_Logo.svg" alt="OBS Studio Icon">`,
    gimp: `<img src="https://upload.wikimedia.org/wikipedia/commons/9/92/Gimp_logo.svg" alt="GIMP Icon">`,
    blender: `<img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg" alt="Blender Icon">`,
    brave: `<img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Brave_Logo_%282024%29.svg" alt="Brave Icon">`,
    libreoffice: `<img src="https://upload.wikimedia.org/wikipedia/commons/0/02/LibreOffice_Logo_Flat.svg" alt="LibreOffice Icon">`,
    audacity: `<img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Audacity_Logo_Plain.svg" alt="Audacity Icon">`,
    sharex: `<img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/ShareX_Logo.png" alt="ShareX Icon">`,
    krita: `<img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Krita-logo-plain.svg" alt="Krita Icon">`,
    "7zip": `<img src="https://upload.wikimedia.org/wikipedia/commons/3/32/7-Zip_Icon.svg" alt="7-Zip Icon">`,
    rufus: `<img src="https://upload.wikimedia.org/wikipedia/commons/4/47/RUFUS.png" alt="Rufus Icon">`,
    firefox: `<img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg" alt="Firefox Icon">`,
    keepassxc: `<img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/KeePassXC.svg" alt="KeePassXC Icon">`,
    thunderbird: `<img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Thunderbird-logo-supernova.webp" alt="Thunderbird Icon">`,
    qbittorrent: `<img src="https://upload.wikimedia.org/wikipedia/commons/6/66/New_qBittorrent_Logo.svg" alt="qBittorrent Icon">`,
    inkscape: `<img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Inkscape_Logo.svg" alt="Inkscape Icon">`,
    handbrake: `<img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Handbrake_light.png" alt="HandBrake Icon">`,
    notepadpp: `<img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Notepad%2B%2B_Logo.svg" alt="Notepad++ Icon">`,
    git: `<img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" alt="Git Icon">`,
    kodi: `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v12.0.0/icons/kodi.svg" alt="Kodi Icon">`,
    torbrowser: `<img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Tor_Browser_icon_%28New%29.png" alt="Tor Browser Icon">`,
    wireshark: `<img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Wireshark_Logo.svg" alt="Wireshark Icon">`,
    freecad: `<img src="https://upload.wikimedia.org/wikipedia/commons/2/28/FreeCAD-wordmark.svg" alt="FreeCAD Icon">`,
    godot: `<img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Godot_logo.svg" alt="Godot Icon">`,
    calibre: `<img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Calibre_logo_SVG_version.svg" alt="Calibre Icon">`,
    transmission: `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v12.0.0/icons/transmission.svg" alt="Transmission Icon">`,
    bleachbit: `<img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Bleachbit_logo.svg" alt="BleachBit Icon">`,
    filezilla: `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v12.0.0/icons/filezilla.svg" alt="FileZilla Icon">`,
    sweethome3d: `<img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/SweetHome3D_AboutIcon.png" alt="Sweet Home 3D Icon">`,
    veracrypt: `<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/VeraCrypt_Logo.svg" alt="VeraCrypt Icon">`,
    winscp: `<img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/WinSCP_6_Logo.png" alt="WinSCP Icon">`,
    putty: `<img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/PuTTY_Icon.svg" alt="PuTTY Icon">`,
    mpchc: `<img src="https://upload.wikimedia.org/wikipedia/commons/7/76/Media_Player_Classic_logo.png" alt="MPC-HC Icon">`,
    neovim: `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v12.0.0/icons/neovim.svg" alt="Neovim Icon">`,
    gnucash: `<img src="https://upload.wikimedia.org/wikipedia/commons/1/18/GnuCash_logo.svg" alt="GnuCash Icon">`,
    virtualbox: `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v12.0.0/icons/virtualbox.svg" alt="VirtualBox Icon">`,
    geany: `<img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Geany_logo.svg" alt="Geany Icon">`,
    pdfsam: `<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/PDFsam_Basic_logo.svg" alt="PDFsam Icon">`,
    etcher: `<img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Etcher-icon.png" alt="Etcher Icon">`,
    rubrowser: `<img src="https://img.utdstc.com/icon/e8c/d71/e8cd71e498baad2aa8a6e29817f5fa7f426b7e29830da26c4478a0652742aadf:100" alt="RU Browser Icon">`,
    powertoys: `<img src="https://upload.wikimedia.org/wikipedia/commons/2/2b/2020_PowerToys_Icon.svg" alt="PowerToys Icon">`,
    eartrumpet: `<img src="https://raw.githubusercontent.com/File-New-Project/EarTrumpet/master/EarTrumpet.Package/Assets/Square150x150Logo.scale-200.png" alt="EarTrumpet Icon">`,
    winget: `<img src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Windows_Package_Manager_logo.svg" alt="WinGet Icon">`,
    bitwarden: `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v12.0.0/icons/bitwarden.svg" alt="Bitwarden Icon">`,
    ventoy: `<img src="https://upload.wikimedia.org/wikipedia/commons/0/00/Ventoy_Logo.png" alt="Ventoy Icon">`,
    joplin: `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v12.0.0/icons/joplin.svg" alt="Joplin Icon">`,
    rustdesk: `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v12.0.0/icons/rustdesk.svg" alt="RustDesk Icon">`,
    localsend: `<img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/localsend.svg" alt="LocalSend Icon">`,
    kdenlive: `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v12.0.0/icons/kdenlive.svg" alt="Kdenlive Icon">`,
    prusaslicer: `<img src="https://dl.flathub.org/repo/appstream/x86_64/icons/128x128/com.prusa3d.PrusaSlicer.png" alt="PrusaSlicer Icon">`,
    sumatrapdf: `<img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Sumatra_PDF_logo.svg" alt="SumatraPDF Icon">`,
    peazip: `<img src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Peazip_ico.svg" alt="PeaZip Icon">`,
    "flow-launcher": `<img src="https://raw.githubusercontent.com/Flow-Launcher/Flow.Launcher/master/Flow.Launcher/Images/app.png" alt="Flow Launcher Icon">`,
    dbeaver: `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v12.0.0/icons/dbeaver.svg" alt="DBeaver Icon">`,
    shotcut: `<img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/shotcut.svg" alt="Shotcut Icon">`,
    librewolf: `<img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/librewolf.svg" alt="LibreWolf Icon">`,
    "github-desktop": `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v12.0.0/icons/github.svg" alt="GitHub Desktop Icon">`,
    autohotkey: `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v12.0.0/icons/autohotkey.svg" alt="AutoHotkey Icon">`,
    cura: `<img src="https://dl.flathub.org/repo/appstream/x86_64/icons/128x128/com.ultimaker.cura.png" alt="Ultimaker Cura Icon">`,
        whatsapp: `<img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Icon">`,
    "google-drive": `<img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" alt="Google Drive Icon">`,
    chromium: `<img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Chromium_Logo.svg" alt="Chromium Icon">`,
    chrome: `<img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlechrome.svg" alt="Google Chrome Icon">`,
    itunes: `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v12.0.0/icons/itunes.svg" alt="iTunes Icon">`,
    icloud: `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v12.0.0/icons/icloud.svg" alt="iCloud Icon">`,
    "apple-music": `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v12.0.0/icons/applemusic.svg" alt="Apple Music Icon">`,
    "apple-tv": `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v12.0.0/icons/appletv.svg" alt="Apple TV Icon">`,
    "apple-devices": `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v12.0.0/icons/apple.svg" alt="Apple Devices Icon">`,
    "samsung-smart-switch": `<img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Smart_Switch_logo.png" alt="Samsung Smart Switch Icon">`,
    "samsung-flow": `<img src="https://upload.wikimedia.org/wikipedia/commons/6/61/Samsung_Flow_wordmark.svg" alt="Samsung Flow Icon">`,
    "samsung-notes": `<img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Samsung_Notes_icon_2025.svg" alt="Samsung Notes Icon">`,
    "samsung-smartthings": `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v12.0.0/icons/smartthings.svg" alt="SmartThings Icon">`,
    "samsung-quick-share": `<img src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Quickshare.svg" alt="Quick Share Icon">`,
    "google-antigravity": `<svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%; display: block; border-radius: inherit;"><circle cx="12" cy="9" r="5" fill="url(#antigrav-grad)" opacity="0.9" /><path d="M5 16C5 16 8 19 12 19C16 19 19 16 19 16" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" /><path d="M8 13C8 13 10 15 12 15C14 15 16 13 16 13" stroke="#f472b6" stroke-width="1.5" stroke-linecap="round" /><circle cx="5" cy="8" r="1" fill="#60a5fa" /><circle cx="19" cy="11" r="1.5" fill="#f472b6" /><circle cx="12" cy="2" r="1" fill="#3b82f6" /><defs><linearGradient id="antigrav-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3b82f6" /><stop offset="50%" stop-color="#8b5cf6" /><stop offset="100%" stop-color="#ec4899" /></linearGradient></defs></svg>`,
    cursor: `<img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Cursor_logo.svg" alt="Cursor Icon">`,
    windsurf: `<img src="https://raw.githubusercontent.com/lobehub/lobe-icons/master/packages/static-svg/icons/windsurf.svg" alt="Windsurf Icon">`,
    "android-studio": `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v12.0.0/icons/androidstudio.svg" alt="Android Studio Icon">`,
    default: `<svg viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
    xampp: `<svg viewBox="0 0 24 24" fill="none" stroke="#fb923c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="4"/><path d="M7 7l10 10M17 7L7 17"/></svg>`,
    keepass: `<svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    wireguard: `<svg viewBox="0 0 24 24" fill="none" stroke="#5c6bc0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>`,
    "tor-browser": `<svg viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>`,
    "proton-vpn": `<svg viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 11l2 2 4-4"/></svg>`,
    "sing-box": `<svg viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>`,
    "hiddify-app": `<svg viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6V3M12 21v-3M6 12H3M21 12h-3M18.36 5.64l-2.12 2.12M7.76 16.24l-2.12 2.12M18.36 18.36l-2.12-2.12M7.76 7.76L5.64 5.64"/></svg>`,
    "clash-verge": `<svg viewBox="0 0 24 24" fill="none" stroke="#84cc16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"/></svg>`,
    "telegram-desktop": `<svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/></svg>`,
    "utorrent": `<svg viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>`,
    "pidgin": `<svg viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`

};

// Get App Icon HTML (Curated or Dynamic Fallback)
function getAppIconHtml(app) {
    if (APP_ICONS[app.id]) {
        return APP_ICONS[app.id];
    }
    
    // Generate dynamic SVG icon based on app name and category
    const firstLetter = app.name.charAt(0).toUpperCase();
    const secondLetter = app.name.length > 1 ? app.name.charAt(1).toLowerCase() : "";
    
    // Deterministic gradients based on name
    const gradients = [
        { from: "#3b82f6", to: "#1d4ed8" }, // Blue
        { from: "#8b5cf6", to: "#6d28d9" }, // Violet
        { from: "#ec4899", to: "#be185d" }, // Pink
        { from: "#10b981", to: "#047857" }, // Emerald
        { from: "#f59e0b", to: "#b45309" }, // Amber
        { from: "#06b6d4", to: "#0891b2" }, // Cyan
        { from: "#ef4444", to: "#b91c1c" }, // Red
        { from: "#14b8a6", to: "#0f766e" }, // Teal
        { from: "#f43f5e", to: "#be123c" }  // Rose
    ];
    
    let hash = 0;
    for (let i = 0; i < app.name.length; i++) {
        hash = app.name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const gradient = gradients[Math.abs(hash) % gradients.length];
    
    // SVG paths for categories to overlay as watermark
    let symbolPath = "";
    if (app.category === "Development") {
        symbolPath = `<path d="M8 6l-6 6 6 6M16 6l6 6-6 6M10 19l4-14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
    } else if (app.category === "Security" || app.category === "Security/Web") {
        symbolPath = `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
    } else if (app.category === "Multimedia") {
        symbolPath = `<path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM10 8l6 4-6 4V8z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
    } else if (app.category === "Graphics") {
        symbolPath = `<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
    } else if (app.category === "Productivity") {
        symbolPath = `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" stroke-width="2" fill="none"/><polyline points="14 2 14 8 20 8" stroke="white" stroke-width="2" fill="none"/>`;
    } else { // Utilities
        symbolPath = `<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
    }
    
    return `
        <svg viewBox="0 0 32 32" style="width: 100%; height: 100%; display: block; border-radius: inherit;" id="svg-icon-${app.id}">
            <defs>
                <linearGradient id="grad-${app.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="${gradient.from}" />
                    <stop offset="100%" stop-color="${gradient.to}" />
                </linearGradient>
            </defs>
            <rect width="32" height="32" rx="8" fill="url(#grad-${app.id})" />
            <g opacity="0.15" transform="scale(0.8) translate(4, 4)">
                ${symbolPath}
            </g>
            <text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="'Outfit', 'Inter', system-ui, sans-serif" font-weight="bold" font-size="12" letter-spacing="-0.5px">${firstLetter}${secondLetter}</text>
        </svg>
    `;
}

// Global App State
let apps = [];
let activeCategory = 'all';
let searchQuery = '';
let activeSort = 'random';
let selectedApp = null;

// Pagination variables
let currentPage = 1;
const itemsPerPage = 12;
let shuffledApps = [];

// Initialize Elements
document.addEventListener("DOMContentLoaded", async () => {
    initTheme();
    await loadApps();
    initEventListeners();
    filterAndSortApps();
});

// Theme Management (Light / Dark Mode)
function initTheme() {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeBtn();
}

function updateThemeBtn() {
    const toggleBtn = document.getElementById("themeToggle");
    if (!toggleBtn) return;
    
    // Smooth rotation effect when clicked
    toggleBtn.style.transform = "rotate(360deg)";
    setTimeout(() => {
        toggleBtn.style.transform = "none";
    }, 300);
}

// Shuffling helper (Fisher-Yates)
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Dynamic App Database Load & Local Storage Merge
async function loadApps() {
    try {
        const response = await fetch('apps.json?v=2.5.0');
        const data = await response.json();
        const localApps = JSON.parse(localStorage.getItem("submitted_apps")) || [];
        apps = [...data, ...localApps];
    } catch (err) {
        console.error("Failed to load apps.json, falling back to static database", err);
        const localApps = JSON.parse(localStorage.getItem("submitted_apps")) || [];
        apps = [...INITIAL_APPS, ...localApps];
    }
    
    // Update footer stats
    document.getElementById("totalAppsCount").textContent = apps.length;
    
    // Create/Update a session-stable shuffled copy of the apps
    if (shuffledApps.length === 0) {
        shuffledApps = shuffleArray(apps);
    } else {
        const existingIds = new Set(shuffledApps.map(a => a.id));
        const newApps = apps.filter(a => !existingIds.has(a.id));
        if (newApps.length > 0) {
            shuffledApps = [...shuffledApps, ...shuffleArray(newApps)];
        }
        shuffledApps.forEach((app, idx) => {
            const updatedApp = apps.find(a => a.id === app.id);
            if (updatedApp) {
                shuffledApps[idx] = updatedApp;
            }
        });
    }
}

// Render App Cards with Pagination
function renderApps(appsList) {
    const grid = document.getElementById("appsGrid");
    const pagWrapper = document.getElementById("paginationWrapper");
    grid.innerHTML = "";
    
    if (appsList.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-secondary);" class="glass">
                <svg viewBox="0 0 24 24" width="48" height="48" style="margin: 0 auto 16px; fill: var(--text-muted);">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v2z"/>
                </svg>
                <h3 style="font-size: 18px; margin-bottom: 8px;">No Applications Found</h3>
                <p style="font-size: 14px;">Try modifying your search or filters to discover other tools.</p>
            </div>
        `;
        document.getElementById("resultsCount").textContent = 0;
        if (pagWrapper) pagWrapper.innerHTML = "";
        return;
    }
    
    // Pagination slicing
    const totalPages = Math.ceil(appsList.length / itemsPerPage);
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, appsList.length);
    const paginatedApps = appsList.slice(startIndex, endIndex);
    
    paginatedApps.forEach(app => {
        const card = document.createElement("div");
        card.className = "app-card glass";
        card.setAttribute("data-id", app.id);
        
        const iconSvg = getAppIconHtml(app);
        const starIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
        const downloadIcon = `<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>`;
        
        card.innerHTML = `
            <div class="app-card-header">
                <div class="app-card-icon">
                    ${iconSvg}
                </div>
                <div class="app-card-meta">
                    <h3 class="app-card-title">${app.name}</h3>
                    <span class="app-card-developer">${app.developer}</span>
                </div>
            </div>
            <div class="app-card-body">
                <p class="app-card-desc">${app.shortDesc}</p>
            </div>
            <div class="app-card-footer">
                <div class="app-stats">
                    <span class="app-stat" title="Estimated Downloads">
                        ${downloadIcon}
                        ${formatNumber(app.downloads)}
                    </span>
                    <span class="app-stat" title="User Rating">
                        ${starIcon}
                        ${app.rating.toFixed(1)}
                    </span>
                </div>
                <span class="category-tag">${app.category}</span>
            </div>
        `;
        
        // Modal trigger when clicking on card
        card.addEventListener("click", () => openDetailModal(app));
        grid.appendChild(card);
    });
    
    // Update professional result counts
    const displayStart = appsList.length > 0 ? startIndex + 1 : 0;
    document.getElementById("resultsCount").textContent = `Showing ${displayStart}-${endIndex} of ${appsList.length}`;
    
    // Render pagination buttons
    renderPaginationControls(totalPages);
}

// Render Pagination Controls
function renderPaginationControls(totalPages) {
    const pagWrapper = document.getElementById("paginationWrapper");
    if (!pagWrapper) return;
    
    pagWrapper.innerHTML = "";
    
    if (totalPages <= 1) {
        return;
    }
    
    // Create pagination container
    const pagContainer = document.createElement("div");
    pagContainer.className = "pagination-container glass";
    
    // Add Prev Button
    const prevBtn = document.createElement("button");
    prevBtn.className = "page-nav-btn";
    prevBtn.id = "prevPage";
    prevBtn.disabled = currentPage === 1;
    prevBtn.innerHTML = `
        <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"></polyline></svg>
        <span>Previous</span>
    `;
    prevBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            filterAndSortApps(false);
            window.scrollTo({ top: document.querySelector(".app-section").offsetTop - 100, behavior: "smooth" });
        }
    });
    pagContainer.appendChild(prevBtn);
    
    // Add numbers container
    const numbersContainer = document.createElement("div");
    numbersContainer.className = "page-numbers";
    
    const range = 2;
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - range && i <= currentPage + range)) {
            const pageBtn = document.createElement("button");
            pageBtn.className = `page-num-btn ${i === currentPage ? 'active' : ''}`;
            pageBtn.textContent = i;
            pageBtn.addEventListener("click", () => {
                if (currentPage !== i) {
                    currentPage = i;
                    filterAndSortApps(false);
                    window.scrollTo({ top: document.querySelector(".app-section").offsetTop - 100, behavior: "smooth" });
                }
            });
            numbersContainer.appendChild(pageBtn);
        } else if (i === 2 && currentPage - range > 2) {
            const dots = document.createElement("span");
            dots.className = "page-dots";
            dots.textContent = "...";
            numbersContainer.appendChild(dots);
        } else if (i === totalPages - 1 && currentPage + range < totalPages - 1) {
            const dots = document.createElement("span");
            dots.className = "page-dots";
            dots.textContent = "...";
            numbersContainer.appendChild(dots);
        }
    }
    pagContainer.appendChild(numbersContainer);
    
    // Add Next Button
    const nextBtn = document.createElement("button");
    nextBtn.className = "page-nav-btn";
    nextBtn.id = "nextPage";
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.innerHTML = `
        <span>Next</span>
        <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>
    `;
    nextBtn.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            filterAndSortApps(false);
            window.scrollTo({ top: document.querySelector(".app-section").offsetTop - 100, behavior: "smooth" });
        }
    });
    pagContainer.appendChild(nextBtn);
    
    pagWrapper.appendChild(pagContainer);
}

// Utility Format Numbers
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K';
    }
    return num;
}

// Search and Filter logic with Pagination reset
function filterAndSortApps(resetPage = true) {
    if (resetPage) {
        currentPage = 1;
    }

    let baseApps = activeSort === 'random' ? shuffledApps : apps;
    
    let filtered = baseApps.filter(app => {
        // Category Filter
        const matchesCategory = activeCategory === 'all' || app.category.toLowerCase() === activeCategory.toLowerCase();
        
        // Search Query Filter
        const matchesSearch = app.name.toLowerCase().includes(searchQuery) ||
                             app.shortDesc.toLowerCase().includes(searchQuery) ||
                             app.developer.toLowerCase().includes(searchQuery) ||
                             app.category.toLowerCase().includes(searchQuery);
        
        return matchesCategory && matchesSearch;
    });
    
    // Sort logic
    if (activeSort !== 'random') {
        filtered.sort((a, b) => {
            if (activeSort === 'downloads') {
                return b.downloads - a.downloads;
            } else if (activeSort === 'rating') {
                return b.rating - a.rating;
            } else if (activeSort === 'name') {
                return a.name.localeCompare(b.name);
            } else if (activeSort === 'updated') {
                return new Date(b.updated) - new Date(a.updated);
            }
            return 0;
        });
    }
    
    renderApps(filtered);
}

// Event Listeners Registration
function initEventListeners() {
    // Theme Toggle
    document.getElementById("themeToggle").addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("theme", nextTheme);
        updateThemeBtn();
    });

    // Search Input
    document.getElementById("searchInput").addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        filterAndSortApps();
    });

    // Category Filter Pills
    const pills = document.querySelectorAll(".filter-pill");
    pills.forEach(pill => {
        pill.addEventListener("click", () => {
            pills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            activeCategory = pill.dataset.category;
            filterAndSortApps();
        });
    });

    // Sort Dropdown
    document.getElementById("sortSelect").addEventListener("change", (e) => {
        activeSort = e.target.value;
        filterAndSortApps();
    });



    // Detail Modal Close triggers
    const detailModal = document.getElementById("detailModal");
    const closeDetailBtn = document.getElementById("closeDetailModal");

    closeDetailBtn.addEventListener("click", () => {
        detailModal.classList.remove("active");
    });

    detailModal.addEventListener("click", (e) => {
        if (e.target === detailModal) {
            detailModal.classList.remove("active");
        }
    });

    // Detail Modal Action Triggers
    document.getElementById("modalDownloadBtn").addEventListener("click", () => {
        if (selectedApp) {
            detailModal.classList.remove("active");
            startDownloadSimulation(selectedApp);
        }
    });

    // Simulator Close buttons
    const simModal = document.getElementById("downloadSimulatorModal");
    document.getElementById("simulatorCloseBtn").addEventListener("click", () => {
        simModal.classList.remove("active");
    });
}

// App Detail Modal Open Logic
function openDetailModal(app) {
    selectedApp = app;
    
    // Inject values
    document.getElementById("modalAppLogo").innerHTML = getAppIconHtml(app);
    document.getElementById("modalAppName").textContent = app.name;
    document.getElementById("modalAppCategory").textContent = app.category;
    document.getElementById("modalAppLicense").textContent = app.license;
    document.getElementById("modalAppDesc").textContent = app.longDesc;
    document.getElementById("modalAppDeveloper").textContent = app.developer;
    document.getElementById("modalAppVersion").textContent = app.version;
    document.getElementById("modalAppDownloads").textContent = formatNumber(app.downloads);
    document.getElementById("modalAppRating").textContent = `${app.rating.toFixed(1)} / 5.0`;

    // Repo Link dataset
    const repoBtn = document.getElementById("modalRepoBtn");
    repoBtn.setAttribute("data-link", app.repo);

    // Show Detail Modal
    document.getElementById("detailModal").classList.add("active");
}

// Toast Toast Alert System
function showToast(message) {
    const container = document.getElementById("toastContainer");
    
    const toast = document.createElement("div");
    toast.className = "toast toast-success";
    toast.innerHTML = `
        <svg viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    
    // Auto Remove toast after 4s
    setTimeout(() => {
        toast.style.animation = "slideInUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) reverse forwards";
        setTimeout(() => {
            toast.remove();
        }, 350);
    }, 4000);
}

// Download Simulation Engine
function startDownloadSimulation(app) {
    const simModal = document.getElementById("downloadSimulatorModal");
    const bar = document.getElementById("simulatorProgressBar");
    const percentText = document.getElementById("simulatorPercent");
    const statusText = document.getElementById("simulatorStatusText");
    const detailText = document.getElementById("simulatorDetailText");
    const actions = document.getElementById("simulatorCompletedActions");
    const directLink = document.getElementById("simulatorDirectLink");
    const icon = document.getElementById("simulatorIcon");
    const scanner = document.getElementById("scannerRing");

    // Setup Initial State
    simModal.classList.add("active");
    bar.style.width = "0%";
    percentText.textContent = "0%";
    statusText.textContent = "Connecting...";
    detailText.textContent = `Finding mirror nodes for ${app.name} installation packages...`;
    actions.style.display = "none";
    icon.style.fill = "var(--accent-primary)";
    scanner.style.display = "block";

    let progress = 0;
    
    // List of simulation text triggers
    const steps = [
        { limit: 15, status: "Handshaking...", detail: "Connecting to secure CDN server endpoints..." },
        { limit: 35, status: "Downloading package...", detail: `Fetching installation binary (${app.version}) from official repositories...` },
        { limit: 65, status: "Verifying checksum...", detail: "Validating SHA-256 binary hash integrity to ensure source file authenticity..." },
        { limit: 85, status: "Analyzing security...", detail: "Performing integrated antivirus sandbox scans for malware or adware scripts..." },
        { limit: 98, status: "Finalizing request...", detail: "Locating client directories and initializing system handshakes..." }
    ];

    const interval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(interval);
            
            // Set Complete State
            bar.style.width = "100%";
            percentText.textContent = "100%";
            statusText.textContent = "Complete!";
            detailText.textContent = `Secure download initiated for ${app.name}. Please check your downloads folder.`;
            icon.style.fill = "var(--accent-emerald)";
            scanner.style.display = "none";
            actions.style.display = "flex";
            
            // For fictional generated apps, trigger a dynamic download of a custom text file named after the app
            let finalDownloadUrl = app.downloadUrl;
            const isFictional = !APP_ICONS[app.id] && app.id !== "rubrowser";

            if (isFictional) {
                // Set direct download button to trigger the dynamic text file download
                directLink.href = "#";
                directLink.onclick = (e) => {
                    e.preventDefault();
                    triggerFictionalDownload(app);
                };
            } else {
                directLink.href = finalDownloadUrl;
                directLink.onclick = null;
            }
            
            // Increment download counts in simulated storage
            incrementDownloads(app.id);

            // Trigger download
            if (isFictional) {
                triggerFictionalDownload(app);
            } else {
                const downloadWindow = window.open(finalDownloadUrl, '_blank');
                if (!downloadWindow || downloadWindow.closed || typeof downloadWindow.closed == 'undefined') {
                    // If popup blocker blocks the window.open, fallback to location navigation
                    window.location.href = finalDownloadUrl;
                }
            }
            
            showToast(`Downloading ${app.name} started successfully!`);
            return;
        }

        progress += Math.floor(Math.random() * 4) + 1;
        if (progress > 100) progress = 100;

        // Apply visual updates
        bar.style.width = `${progress}%`;
        percentText.textContent = `${progress}%`;

        // Update status text based on progress limits
        const currentStep = steps.find(s => progress <= s.limit);
        if (currentStep) {
            statusText.textContent = currentStep.status;
            detailText.textContent = currentStep.detail;
        }
    }, 120);
}

// Increment App download statistics and persist/render
function incrementDownloads(appId) {
    // Check if user submitted app
    const localApps = JSON.parse(localStorage.getItem("submitted_apps")) || [];
    const localIndex = localApps.findIndex(a => a.id === appId);

    if (localIndex !== -1) {
        localApps[localIndex].downloads += 1;
        localStorage.setItem("submitted_apps", JSON.stringify(localApps));
    } else {
        // Increment static app
        const appIndex = INITIAL_APPS.findIndex(a => a.id === appId);
        if (appIndex !== -1) {
            INITIAL_APPS[appIndex].downloads += 1;
        }
    }

    loadApps();
    filterAndSortApps(false);
}

// Trigger a dynamic text file download for fictional/generated catalog applications
function triggerFictionalDownload(app) {
    const readmeContent = `==================================================
${app.name} - Free & secure Software (Simulation)
==================================================

Thank you for trying out the download simulator on RUHI Apps Store!

App Details:
--------------------------------------------------
* Name: ${app.name}
* Category: ${app.category}
* Developer: ${app.developer}
* License: ${app.license}
* Version: ${app.version}
* Source Code Repo: ${app.repo}

NOTE: This app is a generated realistic catalog entry to demonstrate
a large free & secure app directory. 
In a live production environment, this would trigger the actual binary.

For curated real-world applications (like VLC, Brave, VSCodium, or 
RU Browser), clicking download will fetch and download the real 
official installation binaries from their servers.

Website: http://localhost:8080
Support Email: myjawla@gmail.com
==================================================`;
    
    const blob = new Blob([readmeContent], { type: "text/plain" });
    const blobUrl = URL.createObjectURL(blob);
    
    const downloadAnchor = document.createElement("a");
    downloadAnchor.href = blobUrl;
    downloadAnchor.setAttribute("download", `${app.name}_Setup_Info.txt`);
    downloadAnchor.style.display = "none";
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
    URL.revokeObjectURL(blobUrl);
}


