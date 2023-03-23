import { FC } from 'react';
import { Checkbox, Form } from 'antd';
import Title from '@/components/common/Title';
import styles from './Toggle.module.scss';

const options = ['Углы', 'Линии', 'Комнаты', 'Стены', 'Сетка'];

const Toggle: FC = () => {
  const [form] = Form.useForm();

  const onToggle = () => {
    const values: string[] = form.getFieldValue('options');
    form.setFieldValue('options', values.length < options.length ? options : []);
  };

  return (
    <>
      <Title>Показывать на схеме</Title>

      <span
        className={styles.toggle}
        onClick={onToggle}
      >
        Показать/скрыть все
      </span>

      <Form
        form={form}
        initialValues={{ options }}
      >
        <Form.Item name="options">
          <Checkbox.Group className={styles.group}>
            {options.map((option) => (
              <Checkbox
                key={option}
                value={option}
              >
                {option}
              </Checkbox>
            ))}
          </Checkbox.Group>
        </Form.Item>
      </Form>
    </>
  );
};

export default Toggle;
