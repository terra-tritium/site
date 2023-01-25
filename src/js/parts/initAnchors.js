import { $, $doc, $html } from './_utility';

/*------------------------------------------------------------------

  Anchors

-------------------------------------------------------------------*/
function initAnchors() {
    if ('scrollBehavior' in document.documentElement.style && $html.css('scroll-behavior') === 'smooth') {
        return;
    }

    $doc.on('click', 'a.btn, .mpl-navbar a', function (e) {
        const isHash = this.hash;
        const isURIsame = this.baseURI === window.location.href;

        if (isHash && isHash !== '#' && isHash !== '#!' && isURIsame) {
            const $hashBlock = $(isHash);
            const hash = isHash.replace(/^#/, '');

            if ($hashBlock.length) {
                e.preventDefault();

                // add hash to address bar
                $hashBlock.attr('id', '');
                document.location.hash = hash;
                $hashBlock.attr('id', hash);

                // scroll to block
                window.scrollTo({
                    top: $hashBlock.offset().top - 80,
                    behavior: 'smooth',
                });
            }
        }
    });
}

export { initAnchors };
