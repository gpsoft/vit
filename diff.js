// VO文型の実験
function hoge(s) {
    return s.replace(/^[0-9]+/g,'');
}

function fuga(args) {
    if ( args === undefined ) return null;
    if ( args == 'empty' ) return ["yes"];
    if ( args == 'object' ) return {argc: 12};
    return Array.prototype.slice.apply(args);
}

// 整形が必要なコード
function piyo(d) {    
    return d === undefined ||
		d === null ||     
        (d.length !== undefined && d.length === 0) ||
		d === false;
}

// 関数単位の移動
function first()
{
    hoge('aa');
    return 1;
}
function second()
{
    hoge('b');
    return 1;
}
function last()
{
    hoge('c');
    return 1;
}

function callHoge() {
    hoge('00' +
        '11' +
        'AB');
}

// ビジュアルモードからの挿入
function visual(obj) {
    obj.one();
    obj.two();
}

// 改行混じりのプット
function not(t) {
    if ( t ) {
        return false;
    }
    return true;
}

function piyoPiyo(width) {
    if ( width === undefined ) return '';
    if ( fuga() ) return '';
    return piyo(width);
}

function cat(name, no, flag) {
    if ( !flag ) return '';
    return no + ':' + name;
}
