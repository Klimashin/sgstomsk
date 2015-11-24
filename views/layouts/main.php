<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use app\assets\AppAsset;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>
<div class="header">
    <div class="container">
        <div class="logo">
                <a href="/site/index"><img src="/img/logo.png" class="img-responsive logo" alt="Я логотип =(" /></a>
        </div>
        <div class="head-nav">
            <span class="menu"> </span>
            <ul>
                <li <?php if ($this->context->action->id == 'index'): ?>class="active"<?php endif; ?>><a href="/site/index">Главная</a></li>
                <li <?php if ($this->context->action->id == 'about'): ?>class="active"<?php endif; ?>><a href="/site/about">О нас</a></li>
                <li <?php if ($this->context->action->id == 'news'): ?>class="active"<?php endif; ?>><a href="/site/news">Новости</a></li>
                <li <?php if ($this->context->action->id == 'vacancies'): ?>class="active"<?php endif; ?>><a href="/site/vacancies">Вакансии</a></li>
                <li <?php if ($this->context->action->id == 'contact'): ?>class="active"<?php endif; ?>><a href="/site/contact">Связаться с нами</a></li>
                <div class="clearfix"> </div>
            </ul>
        </div>
        <div class="clearfix"> </div>
    </div>
</div>

<?php if ($this->context->action->id == 'index'): ?>
<div class="header-bottom">
    <div class="first">
        <div class="photowrap photowrap-first">
            <img src="/img/main.jpg" class="bgimages" alt="Copy: unsplash.com"/>
        </div>
        <div class="container">
            <div class="slid-banner">
                <div  id="top" class="callbacks_container-wrap">
                    <div class="contentwrap first-slide">
                            <h1>ООО СПЕЦГЕОСТРОЙ</h1>
                            <p>Комплексные проектно-изыскательные работы.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php endif; ?>

<div class="main">
    <div class="container">
        <?= $content ?>
    </div>
</div>

<!-- footer -->
<div class="footer">
    <div class="container">
            <div class="col-md-4 footer-left">
                <h4>Адрес</h4>
                <div class="addr">
                    <div class="icon">
                            <i class="top"> </i>
                    </div>
                    <div class="data">
                            <p>г.Томск, ул. Советская, д,26 </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="addr-1">
                        <div class="icon">
                                <i class="mob"> </i>
                        </div>
                        <div class="data">
                            <p>+7 (3822) 53-43-29</p>
                            <h6>E-mail : <a href="mailto:info@company.com">sgs@mail.tomsknet.ru</a></h6>
                        </div>
                        <div class="clearfix"> </div>
                </div>
            </div>
            <div class="clearfix"> </div>
    </div>
</div>
<!-- footer -->

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
