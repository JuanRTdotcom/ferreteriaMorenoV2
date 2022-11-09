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
        * VALUES ('200', '43', 'Lesiones dérmicas de piel y/o TCSC con sobreinfección bacteriana (celulitis, abscesos, fasceitis)', '1'), ('201', '43', 'Dolor agudo en lesiones genitales c/s sobreinfección (orquitis, epididimitis, balanitis, vulvitis)', '1'), ('202', '43', 'Dolor agudo en lesiones anal, perianal, rectal y/o generalizadas', '1'), ('203', '43', 'Lesiones orofaríngeas que impidan deglución/lesiones retrofaríngeas que dificulten la respiración', '1'), ('204', '43', 'Lesión ocular/dolor ocular/alteración ocular', '1'), ('205', '43', 'Intolerancia oral y/o diarrea', '1'), ('206', '43', 'Insuficiencia respiratoria por probable infección pulmonar', '1'), ('207', '43', 'Signos de sepsis o shock séptico EAD', '1'), ('208', '43', 'Deshidratación severa con THE', '1'), ('209', '43', 'Encefalitis o meningitis', '1'), ('210', '43', 'Fiebre persistente de foco no identificado (FOD)', '1'), ('211', '43', 'Síndrome convulsivo', '1'), ('212', '43', 'Obstrucción intestinal', '1'), ('213', '43', 'Hemorragia digestiva baja c/s shock hipovolémico', '1'), ('214', '43', 'Alteraciones hematológicas', '1'), ('215', '43', 'Miopericarditis', '1'), ('216', '43', 'Aborto', '1'), ('217', '43', 'Muerte fetal', '1'), ('218', '43', 'Muerte neonatal', '1'), ('219', '43', 'Aislamiento por motivo social', '1'), ('220', '43', 'Por indicación médica para monitoreo (ej: gestante, recién nacido, inmunosuprimido)', '1');
        * VALUES ('221', '49', 'EN INVESTIGACIÓN');
        * VALUES ('222', '49', 'FALLECIDO CONFIRMADO');
        * VALUES ('223', '49', 'FALLECIDO PROBABLE');
        * VALUES ('224', '49', 'FALLECIDO COMPATIBLE');
        * VALUES ('225', '50', 'SI', '1'), (226, '50', 'NO');
        * VALUES ('227', '25', 'NINGUNO');
        * VALUES ('228', '51', 'SI');
        * VALUES ('229', '51', 'NO');
        * VALUES ('230', '43', 'Otro');
        * VALUES ('231', '31', 'PERSONAL DE SALUD');

    

### Changed
### Fixed


