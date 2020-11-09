import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEIo5yV_WiaHQ/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=JQzlg7vqagucnnQ5CpnjoePwmYRhKOnh5mdLEi4tgKs" alt="Guilherme Munis"/>
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQE7bwUoMtXNwQ/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=WT6XQvOZz-49JBeEGh4WY50_AqkE5siQl2ohwvFj_KM" alt="Thiago Candal"/>
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a><a href="teste">
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEqhiJCWUi_Mg/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=633OHQS8J2v8WxgVSbzrMZNphXSZ9cker_r8c8Xnt0c" alt="Geovana Munis"/>
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;