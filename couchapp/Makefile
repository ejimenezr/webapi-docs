en: 
	@for file in `ls ../en/*/*.markdown`; do \
	  filename=`basename -s .markdown $$file`; \
	  target=./_docs/$$filename; \
	  mkdir -p $$target; \
	  cp $$file $$target/body.markdown; \
	  echo $$filename > $$target/_id; \
	done;
