<?php
include 'utils.php';

echo u_ymd();

// スペルチェック
// Name: getResponse
// Args: なし
// Return: レスポンスを返す
function getResponse() {
    $respons = null; // the respons
    var_dump("respons: ".print_r($respons, true));
    return $respons;
}
