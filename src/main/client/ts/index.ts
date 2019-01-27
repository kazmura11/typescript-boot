import 'idempotent-babel-polyfill';　 // Babeってpolyfiる 対象はPromise, native methods, instance methods

// そのとき、これらのimportモジュールはbundleされて、一つのJavaScriptになります。
import * as $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable';
import 'jquery-ui/themes/base/all.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { IndexController } from './controllers/index-controller';

// JQueryを使ってみる
$(document).ready(() => {
    const indexController = new IndexController();
    $('#app').html(indexController.getAdultAnimals().reduce((prev, current) => {
        return prev + '<br />' + current;
    }));

    $('#draggable').draggable();

    indexController.getFooValue().then(result => {
        console.log(result);
    });
});

