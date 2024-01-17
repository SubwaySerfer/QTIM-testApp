<template>
  <footer class="footer">
    <div class="footer-info">
      <div class="info">
        <p class="info-preview">Is there a project?</p>
        <div class="label-block">
          <p class="underline">Let’s work</p>
          <div>
            <p><span class="underline">to</span>g<span class="underline">ether</span></p>
          </div>
        </div>
      </div>
      <ul class="contacts">
        <li class="contacts-el">
          <p>For all questions</p>
          <a href="tel:+79202780068">+7 (920) 278—00—68</a>
          <a class="contacts-el__email" href="mailto:qtim@agency.com">qtim@agency.com</a>
        </li>
        <li class="contacts-el">
          <p>Office in Russia</p>
          <p class="contacts-el__adress">139 Ruben Station Lake Drew, NM 52678</p>
          <figure class="figure"><img src="/assets/icons/button-locarion.svg" alt="location button.">
          </figure>
        </li>
        <li class="contacts-el mg-tp">
          <p>Office in Dubai</p>
          <p class="contacts-el__adress">139 Ruben Station Lake Drew, NM 52678</p>
          <figure class="figure"><img src="/assets/icons/button-locarion.svg" alt="location button.">
          </figure>
        </li>
      </ul>
    </div>
    <div class="media-block">
      <ul class="media-list">
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Telegram</li>
      </ul>
      <figure class="ellipse"><span class="ellipse__text">Go</span></figure>
      <ul class="media-list">
        <li>Behance</li>
        <li>Linkedn</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #E2BEFF;
  height: 90rem;
  padding: 13.7rem 7.77vw 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.contacts-el {
  display: flex;
  flex-direction: column;
  gap: .8rem;
  align-items: start;
  text-align: start;
  width: 100%;
}

.contacts {
  width: 15.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.1rem;
  font-size: 1.6rem;
  margin-top: 7.5rem;
  margin-right: 23.2rem;
  letter-spacing: 0.016rem;
}

.contacts-el__adress {
  line-height: 130%;
}

.figure {
  display: flex;
  width: 3.2rem;
  height: 3.2rem;
  padding: 0.8rem 1.6rem;
  justify-content: center;
  align-items: center;
  border-radius: 99.9rem;
  background: #101010;
}

.label-block {
  margin-top: 5.3rem;
  font-size: 11.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  max-width: min-content;
  text-wrap: nowrap;
  text-align: start;
}

.underline {
  border-bottom: 1px solid #101010;
}

.footer-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.media-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* gap: 17rem; */
  align-items: end;
}

.media-list {
  display: flex;
  flex-direction: row;
  gap: 3.2rem;
  height: min-content;
  padding-bottom: 3rem;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0.016rem;
}

.media-list>li {
  border-bottom: 1px solid #101010;
  height: min-content;
  text-wrap: nowrap;
  cursor: pointer;
}

.ellipse {
  width: 35.8rem;
  height: 17.9rem;
  border-radius: 35.8rem 35.8rem 0 0;
  background: #101010;
  display: flex;
  align-items: end;
  justify-content: center;
  padding-bottom: 2.5rem;
  margin-left: 1.3rem;
}

.ellipse__text {
  color: #F3F3F3;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  cursor: pointer;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: start
}

.info-preview {
  font-size: 1.6rem;
  font-style: normal;
  letter-spacing: 0.016rem;
}

.contacts-el__email {
  transform: translateY(-1rem);
}

.mg-tp {
  margin-top: 1rem;
}
</style>