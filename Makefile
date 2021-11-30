DATE = $(shell date +%F)
TITLE = replace-me

new_post:
	cp ./meetings/posts/template.md ./meetings/posts/$(DATE)-$(TITLE).md
