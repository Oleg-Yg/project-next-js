import React from "react";

const WrapperHookah = () => {
  // const myReduce = (array, callback, initValue) => {
  //   return null;
  // };
  //
  // const nums = [1, 2, 3];
  // console.log(myReduce());

  return (
    <div>
      <button>Отчет</button>
    </div>
  );
};

export default WrapperHookah;

//=================================
// Приложение на классах, которое используется для вычисления стоимости кальянов для розницы
// - На каждую комплектующую есть коэф. наценки и цена в RUB или EUR или USD (где-то должны храниться курсы)
// - Комплект: каллауд, чаша (Phunnel, clay), шахта с трубкой (разных фирм), колба (наруж/внутр крепление), и др
// - После подсчета д.б. возможность напечатать отчет в консоль/файл/отправить на почту/отобразить на экране/... (сделать заглушки)
// - В отчете: все комплектующие с характеристиками и ценой в RUB. В конце ИТОГО.

// interface IHookah {
//   components: IComponent[];
//   getReport: () => {};
// }
//
// interface IComponent {
//   name: string;
//   price: number;
//   currency: "RUB" | "EUR" | "USD";
//   coefficient: number;
// }
//
// interface IBowl extends IComponent {
//   material: string;
// }
//
// class Hookah implements IHookah {
//   private components: IComponent[];
//   constructor(components: IComponent[]) {
//     this.components = components;
//   }
//
//   getReport: () => {};
// }
//
// class Bowl extends Component implements IBowl {
//   private material;
//   constructor({ name, price, currency, coefficient, material }: IBowl) {
//     super({ name, price, currency, coefficient });
//     this.material = material;
//   }
// }
//
// class Component implements IComponent {
//   private name;
//   private price;
//   private currency;
//   private coefficient;
//   constructor({ name, price, currency, coefficient }: IComponent) {
//     this.name = name;
//     this.price = price;
//     this.currency = currency;
//     this.coefficient = coefficient;
//   }
// }
//
// interface IReport {
//   generate: (data: IComponent[]) => void;
// }
//
// class ReportConsole implements IReport {
//   constructor() {}
//   generate(data: IComponent[]) {
//     data.forEach((component) => console.log(component.name, component.price));
//     console.log(data);
//   }
// }
//
// class ReportPDF implements IReport {
//   constructor() {}
//   generate: () => {};
// }

//==============================
