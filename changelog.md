# CAMBIOS REALIZADOS
Los cambios realizados están basados en la última ficha de viruela del mono (24-10-2022) presentada por el grupo temático.
Cambios realizados por Juan Ruiz.

## [2.0.1] Viruela del mono - 09/11/2022
Se agregaros, odificaron y subieron nuevos documentos al proyecto.

### Added
- [SQL]
    *  TABLA 'contactos_directos' en base de datos [monkeypox].
    * CAMPOS EN TABLA 'casos' en base de datos [monkeypox].
        * `lugar_trabajo_estudio`
        * `puerpera`
        * `cod_establecimiento_a`
        * `co_no`
        * `co_tuberculosis`
        * `co_tuberculosis_fecha_diagno`
        * `co_covid`
        * `co_covid_fecha_diagno`
        * `co_otro`
        * `co_otro_valor`
        * `est_cicatriz`
        * `cant_encuentros_sexuales_3_meses`
        * `uso_red_social`
        * `red_social_encuentros`
        * `extremidades_superiores`
        * `extremidades_inferiores`
        * `palma_mano`
        * `abdomen`
        * `lugar_linfa_localizada`
        * `diagno_egreso_uno`
        * `diagno_egreso_dos`
        * `clasificacion_defuncion`
        * `alta_clini_epi_fecha`
        * `investigador_epi`
        * `co_otro`
        * `procedimiento_medico_exantema`
        * `personal_salud`

    * CAMPOS EN TABLA 'contactos' en base de datos [monkeypox].    
        * `uno`
        * `dos`
        * `tres`
        * `cuatro`
        * `cinco`
        * `otro`
        * `lugar_exposicion`

    * REGISTROS EN TABLA 'pregunta' en base de datos [monkeypox].
        * VALUES ('46', 'TIPO DE EXPOSICION')
        * VALUES ('47', 'GRUPO DE POBLACION')
        * VALUES ('48', 'CICATRIZ POR VACUNA VARIÓLICA')
        * VALUES ('49', 'CLASIFICACIÓN DE DEFUNCIÓN')
        * VALUES ('50', 'PUERPERA')
        * VALUES ('51', 'USO DE APLICATIVO PARA ENCUENTRO SEXUAL')

    * REGISTROS EN TABLA 'opciones' en base de datos [monkeypox].
        * VALUES ('171', '1', 'SOSPECHOSO');
        * VALUES ('172', '25', 'TUVO RELACIONES SEXUALES CON DESCONOCIDO(A) O PAREJAS MULTIPLES');
        * VALUES ('173', '25', 'TUVO RELACIONES SEXUALES CON TRABAJADOR(A) SEXUAL');
        * VALUES ('174', '25', 'TUVO RELACIONES SEXUALES CON SU PAREJA (CON EXANTEMA O LESIONES)');
        * VALUES ('175', '25', 'TUVO RELACIONES SEXUALES CON SU PAREJA (SIN MOLESTIAS CLINICAS)');
        * VALUES ('176', '25', 'TUVO CONTACTO CON PERSONAS CON EXANTEMAS O LESIONES EN PIEL');
        * VALUES ('177', '25', 'BRINDO CUIDADOS DE UN CASO PROBABLE O CONFIRMADO DE VM EN DOMICILIO');
        * VALUES ('178', '25', 'EN EE.SS MANIPULO MATERIAL CONTAMINADO DE CASO PROBABLE O CONFIRMADO VM (ROPA,SABANAS,MATERIAL LAB)');
        * VALUES ('179', '25', 'SE REALIZO ALGUN PROCEDIMIENTO MEDICO O DE LABORATORIO');
        * VALUES ('180', '25', 'SE REALIZO ALGUN TAUAJE, PIERCING, ACUPUNTURA');
        * VALUES ('181', '25', 'COMPARTIO JERINGAS POR USO DE SUSTANCIAS PSICOACTIVAS ENDOVENOSAS');
        * VALUES ('182', '46', 'POR CONTACTO ÍNTIMO (RS)');
        * VALUES ('183', '46', 'EXPOSICIÓN A MATERIAL O SUPERFICIES CONTAMINADAS');
        * VALUES ('184', '46', 'POR EXPOSICIÓN A LESIONES O FLUIDOS CORPORALES O CONTACTO CARA A CARA (<2 METROS) SIN ADECUADO USO DEL EPP');
        * VALUES ('185', '46', 'ACCIDENTE PUNZOCORTANTE');
        * VALUES ('186', '46', 'TRANSMISIÓN PLACENTARIA');
        * VALUES ('187', '37', 'NINGUNO');
        * VALUES ('188', '47', 'GESTANTE');
        * VALUES ('189', '47', 'PUERPERA');
        * VALUES ('190', '47', 'RECIÉN NACIDO');
        * VALUES ('191', '47', 'NIÑOS <8 AÑOS');
        * VALUES ('192', '47', 'ADULTO MAYOR');
        * VALUES ('193', '47', 'PERSONAS CON INMUNODEPRESIÓN POR ENFERMEDAD O MEDICACIÓN');
        * VALUES ('194', '47', 'PERSONAS CON ENFERMEDAD QUE AFECTEN A LA INTEGRIDAD DE LA PIEL');
        * VALUES ('195', '48', 'SI');
        * VALUES ('196', '48', 'NO');
        * VALUES ('197', '48', 'DESCONOCIDO');
        * VALUES ('198', '44', '11 A 25 LESIONES');
        * VALUES ('199', '44', '26 A 99 LESIONES');
        * VALUES ('200', '43', 'Lesiones dérmicas de piel y/o TCSC con sobreinfección bacteriana (celulitis, abscesos, fasceitis)', '1'), 
        * VALUES ('201', '43', 'Dolor agudo en lesiones genitales c/s sobreinfección (orquitis, epididimitis, balanitis, vulvitis)'
        * VALUES ('202', '43', 'Dolor agudo en lesiones anal, perianal, rectal y/o generalizadas')
        * VALUES ('203', '43', 'Lesiones orofaríngeas que impidan deglución/lesiones retrofaríngeas que dificulten la respiración')
        * VALUES ('204', '43', 'Lesión ocular/dolor ocular/alteración ocular')
        * VALUES ('205', '43', 'Intolerancia oral y/o diarrea')
        * VALUES ('206', '43', 'Insuficiencia respiratoria por probable infección pulmonar')
        * VALUES ('207', '43', 'Signos de sepsis o shock séptico EAD')
        * VALUES ('208', '43', 'Deshidratación severa con THE')
        * VALUES ('209', '43', 'Encefalitis o meningitis')
        * VALUES ('210', '43', 'Fiebre persistente de foco no identificado (FOD)'
        * VALUES ('211', '43', 'Síndrome convulsivo')
        * VALUES ('212', '43', 'Obstrucción intestinal')
        * VALUES ('213', '43', 'Hemorragia digestiva baja c/s shock hipovolémico')
        * VALUES ('214', '43', 'Alteraciones hematológicas')
        * VALUES ('215', '43', 'Miopericarditis')
        * VALUES ('216', '43', 'Aborto')
        * VALUES ('217', '43', 'Muerte fetal')
        * VALUES ('218', '43', 'Muerte neonatal')
        * VALUES ('219', '43', 'Aislamiento por motivo social')
        * VALUES ('220', '43', 'Por indicación médica para monitoreo (ej: gestante, recién nacido, inmunosuprimido)')
        * VALUES ('221', '49', 'EN INVESTIGACIÓN');
        * VALUES ('222', '49', 'FALLECIDO CONFIRMADO');
        * VALUES ('223', '49', 'FALLECIDO PROBABLE');
        * VALUES ('224', '49', 'FALLECIDO COMPATIBLE');
        * VALUES ('225', '50', 'SI')
        * VALUES ('226', '50', 'NO');
        * VALUES ('227', '25', 'NINGUNO');
        * VALUES ('228', '51', 'SI');
        * VALUES ('229', '51', 'NO');
        * VALUES ('230', '43', 'Otro');
        * VALUES ('231', '31', 'PERSONAL DE SALUD');

    * REGISTROS EN TABLA 'cuerpo_humano' en base de datos [monkeypox].
        * VALUES ('27', 'Extremidades superiores');
        * VALUES ('28', 'Extremidades inferiores');
        * VALUES ('29', 'Abdomen');
        * VALUES ('30', 'Palma de mano');

    

### Changed
- [SQL]
    * TABLA 'opciones' en base de datos [monkeypox].
        * ALTER TABLE `opciones` CHANGE `denominacion` `denominacion` VARCHAR(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL;

    * TABLA 'cuerpo_humano' en base de datos [monkeypox].
        * UPDATE `cuerpo_humano` SET `estado` = '0' WHERE `cuerpo_humano`.`id` = 26;

    * TABLA 'opciones' en base de datos [monkeypox].
        * UPDATE opciones set estado = 0 where id < 199 and id_pregunta = 43;
        * UPDATE opciones set estado = 0 where id in(71,72,73,74,92,143) and id_pregunta = 25;

    * REGISTROS DE TABLA 'casos' A NUEVAS OPCIONES
        * update previo_exantema
        * set id_opcion = 102,
        * otro_detalle = 'RELACIONES SEXUALES CON SU PAREJA'
        * where id_opcion = 71;
        * 
        * update previo_exantema
        * set id_opcion = 102,
        * otro_detalle = 'MANIPULA MATERIAL POTENCIALMENTE CONTAMINADO'
        * where id_opcion = 74;
        * 
        * update previo_exantema
        * set id_opcion = 176
        * where id_opcion = 73;
        * 
        * update previo_exantema
        * set id_opcion = 176
        * where id_opcion = 92;
        * 
        * update previo_exantema
        * set id_opcion = 172
        * where id_opcion = 72;
        * 
        * update previo_exantema
        * set id_opcion = 173
        * where id_opcion = 143;
        * 
        * update casos
        * set motivo_ingreso_hos = 230
        * where motivo_ingreso_hos  in (162,163,158,152);
        * 
        * update casos
        * set motivo_ingreso_hos = 209
        * where motivo_ingreso_hos = 153;
        * 
        * 
        * update casos
        * set motivo_ingreso_hos = 210
        * where motivo_ingreso_hos = 157;
        * 
        * update casos
        * set motivo_ingreso_hos = 204
        * where motivo_ingreso_hos = 154;
        * 
        * 
        * update casos
        * set motivo_ingreso_hos = 203
        * where motivo_ingreso_hos = 155;
        * 
        * 
        * 
        * update casos
        * set motivo_ingreso_hos = 205
        * where motivo_ingreso_hos = 160;
        * 
        * 
        * update casos
        * set motivo_ingreso_hos = 202
        * where motivo_ingreso_hos = 159;
        * 
        * update casos
        * set motivo_ingreso_hos = 207
        * where motivo_ingreso_hos = 161;
        * 
        * 
        * update casos
        * set motivo_ingreso_hos = 200
        * where motivo_ingreso_hos = 156;








### Fixed


