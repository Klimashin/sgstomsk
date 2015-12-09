<?php
namespace app\assets;

use yii\web\AssetBundle;

class TreantAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/Treant.css'
    ];
    public $js = [
        'js/raphael.js',
        'js/Treant.min.js',
    ];
}

