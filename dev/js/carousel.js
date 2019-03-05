import * as _ from './utils'

export default function () {
      //$('.owl-carousel').owlCarousel();

    // const init = (opts) => ($form) => $form.bazeValidate(opts)

    _.exist('.owl-carousel')
        .then(_.toJqueryObject)
        .then(slider => {
            _.log(slider)
            slider.owlCarousel({
                items: 1
            })
        })
        .catch(_.noop)
}
