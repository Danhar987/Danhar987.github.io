// search for element selectors
const SvgSelectors = Array.from(document.querySelectorAll('.target,.setting')) // .target, .settings are classes to use different styles for the <mark>-element
	.filter(SvgElement => isValidElement(SvgElement));
let ArrayCnt = 0
SvgSelectors.forEach(_SvgSelector => {
	SvgSelectors[ArrayCnt].addEventListener('mouseover', ShowSvg)
	SvgSelectors[ArrayCnt].addEventListener('mouseout', ShowSvg)
	ArrayCnt = ++ArrayCnt
});
// check for existing dataset "target" (data-target at HTML)
function isValidElement(isValid) {
	return isValid.dataset.target;
}

// search for SVG targets
const SvgElements = Array.from(document.querySelectorAll('.SvgT,.SvgS')) // .SvgT, .SvgS are classes to use different styles for the SVG paths (does not necessarily have to match the mark class)
//  switch visability
function ShowSvg($event) {
	const CurrSvgElmt = document.querySelector(`#${$event.target.dataset.target}`);
	CurrSvgElmt.classList.toggle('svgShow');
}