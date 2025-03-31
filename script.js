"UTF-8";

const umeuro = 5.3;

        function conversor() {
            
            let valoreuro = document.getElementById('valorReais').value;

            if (isNaN(valoreuro) || valoreuro <= 0) {
                alert("Por favor, digite um valor válido em R$.");
            } else {
                
                let valorConvertido = (valoreuro / umeuro).toFixed(2);
                alert("R$" + valoreuro + " equivale a €" + valorConvertido);
            }
        }