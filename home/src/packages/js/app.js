function limpa_formulário_cep() {
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);
    } else {
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    var cep = valor.replace(/\D/g, '');

    if (cep != "") {

        var validacep = /^[0-9]{8}$/;

        if (validacep.test(cep)) {
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";

            var script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';
            document.body.appendChild(script);

        } else {
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } else {
        limpa_formulário_cep();
    }
};

function mask(o, f) {
    setTimeout(function () {
        var v = mphone(o.value);
        if (v != o.value) {
            o.value = v;
        }
    }, 1);
}

function mphone(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
        r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
        r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
        r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
        r = r.replace(/^(\d*)/, "($1");
    }
    return r;
}

function is_cpf(c) {

    if ((c = c.replace(/[^\d]/g, "")).length != 11)
        return false

    if (c == "00000000000")
        return false;

    var r;
    var s = 0;

    for (i = 1; i <= 9; i++)
        s = s + parseInt(c[i - 1]) * (11 - i);

    r = (s * 10) % 11;

    if ((r == 10) || (r == 11))
        r = 0;

    if (r != parseInt(c[9]))
        return false;

    s = 0;

    for (i = 1; i <= 10; i++)
        s = s + parseInt(c[i - 1]) * (12 - i);

    r = (s * 10) % 11;

    if ((r == 10) || (r == 11))
        r = 0;

    if (r != parseInt(c[10]))
        return false;

    return true;
}


function fMasc(objeto, mascara) {
    obj = objeto
    masc = mascara
    setTimeout("fMascEx()", 1)
}

function fMascEx() {
    obj.value = masc(obj.value)
}

function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf
}

cpfCheck = function (el) {
    document.getElementById('cpfResponse').innerHTML = is_cpf(el.value) ?
        '<span style="color:green">válido</span>' : '<span style="color:red">Digite um CPF valido</span>';
    if (el.value == '') document.getElementById('cpfResponse').innerHTML = '';
}


function Captcha() {
    var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
        'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
    var i;
    for (i = 0; i < 6; i++) {
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
        var g = alpha[Math.floor(Math.random() * alpha.length)];
    }
    var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g;
    document.getElementById("mainCaptcha").innerHTML = code
    document.getElementById("mainCaptcha").value = code
}

function ValidCaptcha() {

    var remember = document.getElementById("remember");
    var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
    var string2 = removeSpaces(document.getElementById('txtInput').value);

    if (string1 == string2 && remember.checked) {
        alert('Valido');
        enviar();
        return true;
    } else {
        alert("Marque a opção nao sou un robo");
        alert('Escreva corretamenta');
        return false;
    }
}

function removeSpaces(string) {
    return string.split(' ').join('');
}

function nu(campo) {
    var digits = "0123456789"
    var campo_temp
    for (var i = 0; i < campo.value.length; i++) {
        campo_temp = campo.value.substring(i, i + 1)
        if (digits.indexOf(campo_temp) == -1) {
            campo.value = campo.value.substring(0, i);
            break;
        }
    }
}

function ValRG(numero) {

    var numero = numero.split("");
    tamanho = numero.length;
    vetor = new Array(tamanho);

    if (tamanho >= 1) {
        vetor[0] = parseInt(numero[0]) * 2;
    }
    if (tamanho >= 2) {
        vetor[1] = parseInt(numero[1]) * 3;
    }
    if (tamanho >= 3) {
        vetor[2] = parseInt(numero[2]) * 4;
    }
    if (tamanho >= 4) {
        vetor[3] = parseInt(numero[3]) * 5;
    }
    if (tamanho >= 5) {
        vetor[4] = parseInt(numero[4]) * 6;
    }
    if (tamanho >= 6) {
        vetor[5] = parseInt(numero[5]) * 7;
    }
    if (tamanho >= 7) {
        vetor[6] = parseInt(numero[6]) * 8;
    }
    if (tamanho >= 8) {
        vetor[7] = parseInt(numero[7]) * 9;
    }
    if (tamanho >= 9) {
        vetor[8] = parseInt(numero[8]) * 100;
    }

    total = 0;

    if (tamanho >= 1) {
        total += vetor[0];
    }
    if (tamanho >= 2) {
        total += vetor[1];
    }
    if (tamanho >= 3) {
        total += vetor[2];
    }
    if (tamanho >= 4) {
        total += vetor[3];
    }
    if (tamanho >= 5) {
        total += vetor[4];
    }
    if (tamanho >= 6) {
        total += vetor[5];
    }
    if (tamanho >= 7) {
        total += vetor[6];
    }
    if (tamanho >= 8) {
        total += vetor[7];
    }
    if (tamanho >= 9) {
        total += vetor[8];
    }


    resto = total % 11;
    if (resto != 0) {
        document.getElementById('camada').innerHTML =
            "<font face=verdana size=2 color=red>Digite um RG válido</font>";
    } else {
        document.getElementById('camada').innerHTML =
            "<font face=verdana size=2 color=forestgreen>RG Válido</font>";
    }
}

var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocalização não é suportada nesse browser.";
    }
}

function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    latlon = new google.maps.LatLng(lat, lon)
    mapholder = document.getElementById('mapholder')
    mapholder.style.height = '200px';
    mapholder.style.width = '400px';

    var myOptions = {
        center: latlon,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        }
    };
    var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
    var marker = new google.maps.Marker({
        position: latlon,
        map: map,
        title: "Você está Aqui!"
    });
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "Usuário rejeitou a solicitação de Geolocalização."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Localização indisponível."
            break;
        case error.TIMEOUT:
            x.innerHTML = "O tempo da requisição expirou."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "Algum erro desconhecido aconteceu."
            break;
    }
}

function apagarTudo() {

    window.location.href = './home/src/packages/html/loading.html';

}

function somenteNumeros(e) {
    var charCode = e.charCode ? e.charCode : e.keyCode;

    if (charCode != 8 && charCode != 9) {

        var max = 3;
        var num = document.getElementById('num');

        if ((charCode < 48 || charCode > 57) || (num.value.length >= max)) {
            return false;
        }

    }
}

function enviar() {
    
    window.location.href = "./home/src/packages/html/loadingOne.html";
}

function validar() {

    var nomeUsuario = formulario.nomeUsuario.value;
    var emailUsuario = formulario.emailUsuario.value;
    var idadeUsuario = formulario.idadeUsuario.value;
    var rgUsuario = formulario.rgUsuario.value;
    var cpfUsuario = formulario.cpfUsuario.value;
    var dataNascimento = formulario.dataNascimento.value;
    var sexoUsuario = formulario.sexoUsuario.value;
    var cepUser = formulario.cepUser.value;
    var numeroUser = formulario.numeroUser.value;

    if (nomeUsuario == "") {
        alert('Preencha o campo com seu nome');
        formulario.nome.focus();
        return false;
    }
    if (emailUsuario == "") {
        alert('Preencha o campo com seu email');
        formulario.nome.focus();
        return false;
    }
    if (idadeUsuario == "") {
        alert('Preencha o campo com seu idade');
        formulario.nome.focus();
        return false;
    }
    if (rgUsuario == "") {
        alert('Preencha o campo com seu RG');
        formulario.nome.focus();
        return false;
    }
    if (cpfUsuario == "") {
        alert('Preencha o campo com seu CPF');
        formulario.nome.focus();
        return false;
    }
    if (dataNascimento == "") {
        alert('Preencha o campo com seu data nascimento');
        formulario.nome.focus();
        return false;
    }
    if (sexoUsuario == "") {
        alert('Preencha o campo com seu Sexo');
        formulario.nome.focus();
        return false;
    }
    if (cepUser == "") {
        alert('Preencha o campo com seu Cep');
        formulario.nome.focus();
        return false;
    }
    if (numeroUser == "") {
        alert('Preencha o campo com o numero recidencial');
        formulario.nome.focus();
        return false;
    }
}

function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        document.getElementById("msgemail").innerHTML = "E-mail válido";
        alert("E-mail valido");
    } else {
        document.getElementById("msgemail").innerHTML = "<font color='red'>E-mail inválido </font>";
        alert("E-mail invalido");
    }
}