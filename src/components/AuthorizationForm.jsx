import { useState } from "react";

import { Input } from "./AuthComponents/Input";

const AuthorizationForm = () => {
  return (
    <div className="background-color">
      <div className="container">
        <div className="num-of-q">
          <h5>1/19</h5>
        </div>
        <div className="auth-form-header">
          <h3>
            Привет! Предлагаем заполнить анкету, ятобы начать знакомства
            &#127802;
          </h3>
        </div>
        <div className="auth-form">
          <form action="">
            <Input
              inputType={"text"}
              labelTitle="Ты парень или девушка?"
              inputId={1}
            />
            <Input inputType={"text"} labelTitle="Имя" inputId={2} />
            <Input inputType={"text"} labelTitle="Возраст?" inputId={3} />
            <Input inputType={"text"} labelTitle="Рост" inputId={4} />
            <Input inputType={"text"} labelTitle="Вес" inputId={5} />
            <Input inputType={"text"} labelTitle="Цвет волос" inputId={6} />
            <Input inputType={"text"} labelTitle="Цвет глаз" inputId={6.1} />
            <Input inputType={"text"} labelTitle="Наличие бороды" inputId={7} />
            {/* for male */}
            <Input inputType={"text"} labelTitle="Длина волос" inputId={7.1} />
            <Input inputType={"text"} labelTitle="Твои интересы" inputId={8} />
            <Input
              inputType={"text"}
              labelTitle="Ассоцияция с животным"
              inputId={9}
            />
            <Input
              inputType={"text"}
              labelTitle="Другое (наличие детей, прошлые браки, вредные привычки и т.д."
              inputId={10}
            />
            <Input
              inputType={"text"}
              labelTitle="Чем бы ты занимался, если бы все работы в мире оплачивались одинаково?"
              inputId={11}
            />
            <Input
              inputType={"text"}
              labelTitle="Предпочтение к виду отдыха?"
              inputId={12}
            />
            <Input
              inputType={"text"}
              labelTitle="Ценности/Философия жизни/Твое кредо"
              inputId={13}
            />
            <Input
              inputType={"text"}
              labelTitle="Назови 3 самых крутых мест в мире, куда бы ты пригласил/а понравившегося КИТа"
              inputId={14}
            />
            <Input inputType={"text"} labelTitle="Цель встречи" inputId={15} />
            <Input inputType={"text"} labelTitle="О себе" inputId={16} />
            <Input
              inputType={"text"}
              labelTitle="Качества, которые ты ценишь в партнере"
              inputId={17}
            />
            <Input inputType={"text"} labelTitle="Город" inputId={18} />
            <Input inputType={"text"} labelTitle="Инстаграм" inputId={19} />
            <Input inputType={"text"} labelTitle="Телеграм" inputId={20} />
            <Input inputType={"submit"} inputId={21} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthorizationForm;
