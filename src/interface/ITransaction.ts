export interface ITransaction {
  id?: string;
  establishment_name: string;
  created_at?: string;
  spent_value: string;
  category_establishment: string;
  card_credit_id?: string;
  type_transaction: string;
}