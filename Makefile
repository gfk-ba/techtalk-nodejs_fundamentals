
SRC_DIR := src
BUILD_DIR := build
TARGETS := presentation handout

.PHONY: all presentation handout clean

all: presentation handout

presentation: presentation.pdf

handout: handout.pdf

%.pdf: ${SRC_DIR}/%.tex $(wildcard ${SRC_DIR}/*.tex) $(wildcard ${SRC_DIR}/section/*.tex) $(wildcard ${SRC_DIR}/section/examples/*.*)
	mkdir -p ${BUILD_DIR}
	pdflatex --output-directory=${BUILD_DIR} $<
	pdflatex --output-directory=${BUILD_DIR} $<
	cp ${BUILD_DIR}/$@ ./$@

clean:
	rm -rf ${BUILD_DIR} $(addsuffix .pdf, ${TARGETS})

