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

    default: `<svg viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`
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
let activeSort = 'downloads';
let selectedApp = null;

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

// Dynamic App Database Load & Local Storage Merge
async function loadApps() {
    try {
        const response = await fetch('apps.json?v=2.1.0');
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
}

// Render App Cards
function renderApps(appsList) {
    const grid = document.getElementById("appsGrid");
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
        return;
    }
    
    appsList.forEach(app => {
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
        
        // Modal trigger when clicking on card (except buttons if any)
        card.addEventListener("click", () => openDetailModal(app));
        grid.appendChild(card);
    });
    
    document.getElementById("resultsCount").textContent = appsList.length;
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

// Search and Filter logic
function filterAndSortApps() {
    let filtered = apps.filter(app => {
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
    filterAndSortApps();
}

// Trigger a dynamic text file download for fictional/generated catalog applications
function triggerFictionalDownload(app) {
    const readmeContent = `==================================================
${app.name} - Open Source Software (Simulation)
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
a large open-source directory (1000+ apps). 
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


