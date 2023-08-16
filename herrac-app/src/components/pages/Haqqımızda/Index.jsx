import React from 'react';
import { Container, Row, Col } from "reactstrap";
import "./Index.css"

function Index() {
  return (
    <div className='about-us'>
      <Container>
        <Row>
          <Col lg={{
            offset: 2,
            size: 9
          }}>
            <div className="about-textarea">
              <h2 className='head-title'>
              Haqqımızda
              </h2>
              <p className='about-text'> 13.05.2008-ci il tarixdə təsis olunmuş “Əmlak Hərrac Mərkəzi” MMC-nin əsas fəaliyyət istiqamətlərini ehtiva edən Nizamnaməsinin 3.1-ci bəndinə görə Cəmiyyət müvafiq sifarişlər əsasında hərracların təşkilini həyata keçirilməsi xidmətlərini göstərir. “Əmlak Hərrac Mərkəzi” MMC yüksək ixtisaslı mütəxəssis heyətinə, inzibati ofis binasına, zəruri maddi-texniki bazaya malikdir.</p>
              <p className='about-text'>  “Əmlak Hərrac Mərkəzi“ müxtəlif növ hərracın təşkili ilə bağlı sifarişlərin icra olunması üçün hərracların təşkili və keçirilməsi, hərracı canlı izləmə şəraitinin yaradılması, saxlanc xidməti (anbarlar və dayanacaqlar), hərrac iştirakçılarına elektron xidmətlərin göstərilməsi (iştirakçıların elektron qeydiyyatı, bildirişlərin göndərilməsi və s.), habelə elektron hərracların həyata keçirilməsi xidmətinin təqdim edilməsi imkanlarına da malikdir.</p>
              <p className='about-text'> “e-herrac.com, e-herrac.az” domainləri üzərində  “Əmlak Hərrac Mərkəzi” MMC-nin veb-saytı beynəlxalq standartların tələblərinə uyğun şəkildə hazırlanmış və bu sayt vasitəsilə elektron hərracların təşkili, keçiriləcək hərracların canlı izlənilməsi müasir tələblərə cavab verən şəkildə təmin edilmişdir.</p>
              <p className='about-text'>“Əmlak Hərrac Mərkəzi” tərəfindən hazırki vaxtadək bir sıra hüquqi şəxslərin və fərdi sahibkarların sifarişləri əsasında hərraclar təşkil edilməklə həyata keçirilmişdir. “Əmlak Hərrac Mərkəzi” icra qurumlarının sifarişi əsasında da hərracları keçirir.</p>
              <p className='about-text'>Əmlak Hərrac Mərkəzi” hazırda Bakı şəhəri Yasamal rayonu Mətbuat pr. 18/7, 539-cu məh. ünvanında müasir texniki imkanlara malik (200 kv.m-lik)ofis binasında fəaliyyət göstərir.</p>
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Index
