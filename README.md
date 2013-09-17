OpenXC Vehicle Interface Reference Design
=========================================

This repository is a part of the [OpenXC][] project.

This repository contains the documentation and open source design files for the
OpenXC vehicle interface reference design, originally created by Ford.

## Documentation

The documentation is in the form of simple website, written in Markdown with the
HTML generated with [Jekyll][jekyll].

[jekyll]: http://jekyllrb.com/

### Organization

* the `*.mkd` files are the source for the documentation website - they're very
  readable as plain text files, too, if you're just digging through the
  repository.
* `static/` contains the static JavaScript, CSS and images for the site.
* `_layouts/default.html` contains the main layout for the site. There's only 1
  layout for now, although there could others in the future.
* `electrical/` contains the electrical design files and documentation.
* `mechanical/` contains the mechanical housing design files and documentation.
* `assembly/` contains documentation to support final assembly at a fabrication
  house.

### Local development

If you do not have ruby and RubyGems installed (you already do on OS X), see
below.

Assuming you have Ruby and RubyGems installed:

    $ gem install rdiscount jekyll

Then, assuming you have Python's `pip` installed:

    $ pip install pygments

Then run the local development server:

    $ cd reference-vi
    reference-vi/ $ jekyll serve -w

and point your browser to http://localhost:4000.

Jekyll uses the templates in the repository to generate a static html version of
the site. The static version is always dumped in the `_site` subdirectory in the
repository - this is *not* committed, since it's automatically generated. The
`-w` flag turns on auto-recompilation, so anytime you change a file it will
regenerate whatever files have changed, so you just need to refresh the browser
to see your latest updates.

### Installing Ruby and RubyGems

**Cygwin in Windows**

TODO is this necessary anymore?

Install the `ruby`, `make`, `gcc`, `libiconv` and `zlib` packages in
Cygwin using the `setup.exe`
you downloaded earlier. Download the RubyGems TGZ package from
http://rubygems.org/pages/download and put it in `C:\cygwin\home\<your
username>`. Fire up Cygwin and run this:

    $ tar -xzf rubygems*.tgz
    $ cd rubygems*
    $ ruby setup.rb

Jekyll depends on posix-spawn v0.3.6, but that has a problem with compiling in
Cygwin. The latest development version works, though, so install that gem from
source before continuing:

    $ git clone https://github.com/rtomayko/posix-spawn.git
    $ cd posix-spawn
    $ gem build posix-spawn.gemspec
    $ gem install posix-spawn-0.3.6.gem

If you didn't get any errors, return to the top of this section and install
jekyll.

### Going Live

The documentation site is hosted on GitHub pages, so deploying is as simple as
commiting your changes to the `gh-pages` branch and pushing to GitHub. It gets
regenerated within a minute or two, and then it's live. This of course means
don't push anything in the `gh-pages` branch that isn't 100% done!

## License

Copyright (c) 2013 Ford Motor Company

The source code in this repository is available under the BSD open source license.

The electrical and mechanical designs in this repository are available under the
[Creative Commons Atribution 3.0
Unported](http://creativecommons.org/licenses/by/3.0/deed.en_US) license.

[OpenXC]: http://openxcplatform.com
