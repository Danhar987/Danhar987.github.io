// search for element selectors
const SvgSelectors = Array.from(document.querySelectorAll('.target,.setting,.result'))
	.filter(SvgElement => isValidElement(SvgElement));
let ArrayCnt = 0
SvgSelectors.forEach(_SvgSelector => {
	SvgSelectors[ArrayCnt].addEventListener('mouseover', ShowSvg)
	SvgSelectors[ArrayCnt].addEventListener('mouseout', ShowSvg)
	ArrayCnt = ++ArrayCnt
});
// check for existing dataset
function isValidElement(isValid) {
	return isValid.dataset.target;
}

// search for SVG targets
const SvgElements = Array.from(document.querySelectorAll('.SvgT,.SvgS,.SvgR'))
//  switch visability
function ShowSvg($event) {
	const CurrSvgElmt = document.querySelector(`#${$event.target.dataset.target}`);
	CurrSvgElmt.classList.toggle('svgShow');
}
