let books=[
      {
    id: 1,
    url: "https://www.educompany.az/assets/front/image/publish/f0ef4b54e679b2a9958cc2926744b359.jpg",
    title: "Riyaziyyat Dərs Vəsaiti",
    price: 15,
    description:
      "Əziz Oxucular! 2013-ü ildən peşəkar fəaliyyəti və onlarla nümunəvi dərsliyin müəllifliyi ilə xalqın xidmətindən olan EDU Company Təhsil Şirkəti bu dəfə də oxucuları üçün etibarlı vəsait və qüsursuz tərtibat ərsəyə gətirdi. Həyatınızın önəmli dönüş nöqtələrindən biri universitet imtahanlarıdır. Bu imtahanda qazanacağınız ixtisas sizin ömürlük iş həyatınızı, maddi gəlirlərinizi və rahat yaşamanızı təmin edəcək.Belə önəmli bir imtahanda uğur qazanmağın əsas şərtlərindən biri hazırlıq prosesində asan başa düşülən və Dövlət imtahan mərkəzinin (DİM-in) proqramına uyğun olan kitablara sahib olmaqdır. İnanırıq ki, çətin Riyaziyyat fənninin imtahanlarının da çətin düşdüyü bu dövrdə sizə təqdim etdiyimiz bu kitab hazırlıq dönəmində əlinizdən yerə qoymayacağınız, oxuduqca anladığınız və anladıqca oxumaq istədiyiniz bir kitab olacaq. Kitaba bələdçilik üçün bir neçə bənddən ibarət olan məlumatı diqqətinizə çatdırırıq: İki hissədən ibarət olan bu kitabın 1-ci hissəsi, DİM-in test toplusunun 1-ci hissəsində olan mövzuları əhatə edir. *Kitab DİM-in proqramı əsasında hazırlanmışdır.İzahlı suallar DİM-in test toplusu, sınaq və imtahanlarındakı suallar əsasında tərtib olunub. Nəzəri materialların düzülüşü, axıcı izahı və bol misal nümunələri Riyaziyyat fənninin asan başa düşülməsini təmin edir. Əziz abituriyentlər, kitabın həm dizayn və tərtibinin, həm axıcı nəzəri materialların, həm də asan izah tərzinin sizlər üçün faydalı olacağına inanırıq.Kitabla bağlı irad və təklifləriniz üçün +994774251202 əlaqə nömrəsinə zəng edə və ya oguznesriyyati@gmail.com elektron ünvanına yaza bilərsiniz. ",
  },
]

const getAllBooks = (req, res) => {
  res.json(books);
}

const createBook = (req, res) => {
  const newBook = {
    id: books.length + 1,
    ...req.body,
  };
  books.push(newBook);
  res.status(201).json(newBook);
}

const getBookById = (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  const book = books.find(b => b.id === bookId);
  
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  
  res.json(book);
}
const updateBookById = (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  const bookIndex = books.findIndex(b => b.id === bookId);
  
  if (bookIndex === -1) {
    return res.status(404).json({ message: "Book not found" });
  }
  
  const updatedBook = {
    ...books[bookIndex],
    ...req.body,
  };
  
  books[bookIndex] = updatedBook;
  res.json(updatedBook);
}

const deleteBookById = (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  const bookIndex = books.findIndex(b => b.id === bookId);
  
  if (bookIndex === -1) {
    return res.status(404).json({ message: "Book not found" });
  }
  
  books.splice(bookIndex, 1);
  res.status(204).send();
}
module.exports = {
  getAllBooks,      
    createBook,
    getBookById,
    updateBookById,
    deleteBookById
};