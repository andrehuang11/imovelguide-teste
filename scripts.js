const mostrarNumeroTel = () => {
    document.querySelectorAll('.ver-telefone').forEach(link => {
        link.addEventListener('click', () => {
            const numeroTel = link.getAttribute('data-tel');
            const numeroFormatado = `(${numeroTel.substring(0, 2)}) ${numeroTel.substring(2, 7)}-${numeroTel.substring(7)}`;
            link.nextElementSibling.textContent = numeroFormatado;
        });
    });
}

const aplicarMascaras = () => {
    const cpfInput = document.getElementById('cpf');
    const telInput = document.getElementById('telefone');

    if (cpfInput) {
        cpfInput.addEventListener('input', event => {
            let value = event.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            event.target.value = value;
        });
    }

    if (telInput) {
        telInput.addEventListener('input', event => {
            let value = event.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);
            value = value.replace(/(\d{2})(\d)/, '($1) $2');
            value = value.replace(/(\d{5})(\d)/, '$1-$2');
            event.target.value = value;
        });
    }
}

const mostrarAlerta = () => {
    const form = document.querySelector('.message form');

    if (form) {
        form.addEventListener('submit', () => {
            alert('Mensagem enviada com sucesso!');
        });
    }
}

const iniciarRegraDeTres = () => {
    const calcularRegraDeTres = (a, b, c) => {
        if (a === 0) {
            throw new Error("O valor de 'A' não pode ser zero.");
        }

        const d = (b * c) / a;
        return d;
    };


    document.getElementById('regraDeTresForm').addEventListener('submit', event => {
        event.preventDefault(); // Prevenir o comportamento padrão de envio do formulário

        const a = parseFloat(document.getElementById('a').value);
        const b = parseFloat(document.getElementById('b').value);
        const c = parseFloat(document.getElementById('c').value);

        try {
            const resultado = calcularRegraDeTres(a, b, c);
            document.getElementById('resultado').value = resultado.toFixed(2);
        } catch (error) {
            alert(`Erro: ${error.message}`);
        }
    });
};

const abrirModal = (src) => {
    const modal = document.getElementById("meuModal");
    const modalImg = document.getElementById("img01");
    modal.style.display = "flex";
    modalImg.src = src;
}

const fecharModal = () => {
    const modal = document.getElementById("meuModal");
    modal.style.display = "none";
}

function addDownload() {
    document.querySelectorAll('.image-box').forEach((box) => {
        const downloadButton = box.querySelector('button');
        const imageContainer = box.querySelector('.image-container');

        if (imageContainer) {
            downloadButton.addEventListener('click', () => {
                html2canvas(imageContainer).then(canvas => {
                    const link = document.createElement('a');
                    link.href = canvas.toDataURL('image/png');
                    link.download = 'image-container.png';
                    link.click();
                }).catch(err => {
                    console.error("Erro ao capturar a imagem:", err);
                });
            });
        }
    });
}

function addEfeitoZoom() {
    document.addEventListener('DOMContentLoaded', () => {
        const lastImageBox = document.querySelector('.image-box:last-of-type');
        if (lastImageBox) {
            lastImageBox.classList.add('zoom-out');
        }
    });
}

function alternarMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('open');
    });
}

aplicarMascaras();
mostrarNumeroTel();
mostrarAlerta();
iniciarRegraDeTres();
addDownload();
addEfeitoZoom();
alternarMenu();