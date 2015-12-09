<?php
namespace app\assets;

use yii\web\AssetBundle;

class CompanyStructureAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $js = [
        'js/blockStructureInit.js',
    ];

    public $depends = [
        'app\assets\AppAsset',
    ];
}

