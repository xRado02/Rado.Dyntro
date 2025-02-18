export enum OrderStatus {
  InProgress,
  Completed,
  Canceled,
}

export enum OrderPriority {
  Low,
  Medium,
  High,
}

export enum OrderCategory {
  EmailCampaing,
  LinkedinAutomatization,
  Other,
}

export const OrderStatusNames: { [key in OrderStatus]: string } = {
  [OrderStatus.InProgress]: 'W realizacji',
  [OrderStatus.Completed]: 'Zakończone',
  [OrderStatus.Canceled]: 'Anulowane'
};

export const OrderPriorityNames: { [key in OrderPriority]: string } = {
  [OrderPriority.Low]: "Niski",
  [OrderPriority.Medium]: "Średni",
  [OrderPriority.High]: "Wysoki",

};

export const OrderCategoryNames: { [key in OrderCategory]: string } = {
  [OrderCategory.LinkedinAutomatization]: "Automatyzacja Linkedin",
  [OrderCategory.EmailCampaing]: "Kampania e-mail",
  [OrderCategory.Other]: "Inne",
}
