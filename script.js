function calculateAverage() {
    // Sınav sayısını al
    const examCount = parseInt(document.getElementById('examCount').value);
  
    // Sınav notlarını al
    const grades = [];
    for (let i = 1; i <= examCount; i++) {
      const grade = parseInt(document.getElementById(`grade${i}`).value);
      grades.push(grade);
    }
  
    // Ortalamayı hesapla
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    const average = sum / examCount;
  
    // Sonucu ekrana yazdır
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Ortalama: ${average.toFixed(2)}`;
  }
  
  // Dinamik olarak sınav notu giriş alanları eklemek için
  document.getElementById('examCount').addEventListener('change', function () {
    const examCount = parseInt(this.value);
    const examGradesContainer = document.getElementById('examGrades');
  
    examGradesContainer.innerHTML = ''; // Önceki not alanlarını temizle
  
    for (let i = 1; i <= examCount; i++) {
      const input = document.createElement('input');
      input.type = 'number';
      input.placeholder = `Sınav ${i} Notu`;
      input.id = `grade${i}`;
      examGradesContainer.appendChild(input);
    }
  });
  