# `googleHealthcareFhirStore` Submodule <a name="`googleHealthcareFhirStore` Submodule" id="@cdktn/provider-google-beta.googleHealthcareFhirStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleHealthcareFhirStore <a name="GoogleHealthcareFhirStore" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store google_healthcare_fhir_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStore;

GoogleHealthcareFhirStore.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataset(java.lang.String)
    .name(java.lang.String)
//  .complexDataTypeReferenceParsing(java.lang.String)
//  .consentConfig(GoogleHealthcareFhirStoreConsentConfig)
//  .defaultSearchHandlingStrict(java.lang.Boolean|IResolvable)
//  .deletionPolicy(java.lang.String)
//  .disableReferentialIntegrity(java.lang.Boolean|IResolvable)
//  .disableResourceVersioning(java.lang.Boolean|IResolvable)
//  .enableHistoryImport(java.lang.Boolean|IResolvable)
//  .enableHistoryModifications(java.lang.Boolean|IResolvable)
//  .enableUpdateCreate(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .notificationConfig(GoogleHealthcareFhirStoreNotificationConfig)
//  .notificationConfigs(IResolvable|java.util.List<GoogleHealthcareFhirStoreNotificationConfigs>)
//  .streamConfigs(IResolvable|java.util.List<GoogleHealthcareFhirStoreStreamConfigs>)
//  .timeouts(GoogleHealthcareFhirStoreTimeouts)
//  .validationConfig(GoogleHealthcareFhirStoreValidationConfig)
//  .version(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.dataset">dataset</a></code> | <code>java.lang.String</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name for the FhirStore. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.complexDataTypeReferenceParsing">complexDataTypeReferenceParsing</a></code> | <code>java.lang.String</code> | Enable parsing of references within complex FHIR data types such as Extensions. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.consentConfig">consentConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfig">GoogleHealthcareFhirStoreConsentConfig</a></code> | consent_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.defaultSearchHandlingStrict">defaultSearchHandlingStrict</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, overrides the default search behavior for this FHIR store to handling=strict which returns an error for unrecognized search parameters. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.disableReferentialIntegrity">disableReferentialIntegrity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable referential integrity in this FHIR store. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.disableResourceVersioning">disableResourceVersioning</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable resource versioning for this FHIR store. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.enableHistoryImport">enableHistoryImport</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to allow the bulk import API to accept history bundles and directly insert historical resource versions into the FHIR store. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.enableHistoryModifications">enableHistoryModifications</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to allow the ExecuteBundle API to accept history bundles, and directly insert and overwrite historical resource versions into the FHIR store. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.enableUpdateCreate">enableUpdateCreate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether this FHIR store has the updateCreate capability. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#id GoogleHealthcareFhirStore#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-supplied key-value pairs used to organize FHIR stores. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.notificationConfigs">notificationConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>></code> | notification_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.streamConfigs">streamConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>></code> | stream_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts">GoogleHealthcareFhirStoreTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.validationConfig">validationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfig">GoogleHealthcareFhirStoreValidationConfig</a></code> | validation_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | The FHIR specification version. Default value: "STU3" Possible values: ["DSTU2", "STU3", "R4"]. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.dataset"></a>

- *Type:* java.lang.String

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#dataset GoogleHealthcareFhirStore#dataset}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name for the FhirStore.

** Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#name GoogleHealthcareFhirStore#name}

---

##### `complexDataTypeReferenceParsing`<sup>Optional</sup> <a name="complexDataTypeReferenceParsing" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.complexDataTypeReferenceParsing"></a>

- *Type:* java.lang.String

Enable parsing of references within complex FHIR data types such as Extensions.

If this value is set to ENABLED, then features like referential integrity and Bundle reference rewriting apply to all references. If this flag has not been specified the behavior of the FHIR store will not change, references in complex data types will not be parsed. New stores will have this value set to ENABLED by default after a notification period. Warning: turning on this flag causes processing existing resources to fail if they contain references to non-existent resources. Possible values: ["COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED", "DISABLED", "ENABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#complex_data_type_reference_parsing GoogleHealthcareFhirStore#complex_data_type_reference_parsing}

---

##### `consentConfig`<sup>Optional</sup> <a name="consentConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.consentConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfig">GoogleHealthcareFhirStoreConsentConfig</a>

consent_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#consent_config GoogleHealthcareFhirStore#consent_config}

---

##### `defaultSearchHandlingStrict`<sup>Optional</sup> <a name="defaultSearchHandlingStrict" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.defaultSearchHandlingStrict"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, overrides the default search behavior for this FHIR store to handling=strict which returns an error for unrecognized search parameters.

If false, uses the FHIR specification default handling=lenient which ignores unrecognized search parameters.
The handling can always be changed from the default on an individual API call by setting the HTTP header Prefer: handling=strict or Prefer: handling=lenient.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#default_search_handling_strict GoogleHealthcareFhirStore#default_search_handling_strict}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#deletion_policy GoogleHealthcareFhirStore#deletion_policy}

---

##### `disableReferentialIntegrity`<sup>Optional</sup> <a name="disableReferentialIntegrity" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.disableReferentialIntegrity"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable referential integrity in this FHIR store.

This field is immutable after FHIR store
creation. The default value is false, meaning that the API will enforce referential integrity and fail the
requests that will result in inconsistent state in the FHIR store. When this field is set to true, the API
will skip referential integrity check. Consequently, operations that rely on references, such as
Patient.get$everything, will not return all the results if broken references exist.

** Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#disable_referential_integrity GoogleHealthcareFhirStore#disable_referential_integrity}

---

##### `disableResourceVersioning`<sup>Optional</sup> <a name="disableResourceVersioning" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.disableResourceVersioning"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable resource versioning for this FHIR store.

This field can not be changed after the creation
of FHIR store. If set to false, which is the default behavior, all write operations will cause historical
versions to be recorded automatically. The historical versions can be fetched through the history APIs, but
cannot be updated. If set to true, no historical versions will be kept. The server will send back errors for
attempts to read the historical versions.

** Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#disable_resource_versioning GoogleHealthcareFhirStore#disable_resource_versioning}

---

##### `enableHistoryImport`<sup>Optional</sup> <a name="enableHistoryImport" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.enableHistoryImport"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to allow the bulk import API to accept history bundles and directly insert historical resource versions into the FHIR store.

Importing resource histories creates resource interactions that appear to have
occurred in the past, which clients may not want to allow. If set to false, history bundles within an import
will fail with an error.

** Changing this property may recreate the FHIR store (removing all data) **

** This property can be changed manually in the Google Cloud Healthcare admin console without recreating the FHIR store **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#enable_history_import GoogleHealthcareFhirStore#enable_history_import}

---

##### `enableHistoryModifications`<sup>Optional</sup> <a name="enableHistoryModifications" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.enableHistoryModifications"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to allow the ExecuteBundle API to accept history bundles, and directly insert and overwrite historical resource versions into the FHIR store.

If set to false, using history bundles fails with an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#enable_history_modifications GoogleHealthcareFhirStore#enable_history_modifications}

---

##### `enableUpdateCreate`<sup>Optional</sup> <a name="enableUpdateCreate" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.enableUpdateCreate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether this FHIR store has the updateCreate capability.

This determines if the client can use an Update
operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through
the Create operation and attempts to Update a non-existent resource will return errors. Please treat the audit
logs with appropriate levels of care if client-specified resource IDs contain sensitive data such as patient
identifiers, those IDs will be part of the FHIR resource path recorded in Cloud audit logs and Cloud Pub/Sub
notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#enable_update_create GoogleHealthcareFhirStore#enable_update_create}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#id GoogleHealthcareFhirStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-supplied key-value pairs used to organize FHIR stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#labels GoogleHealthcareFhirStore#labels}

---

##### `notificationConfig`<sup>Optional</sup> <a name="notificationConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.notificationConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#notification_config GoogleHealthcareFhirStore#notification_config}

---

##### `notificationConfigs`<sup>Optional</sup> <a name="notificationConfigs" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.notificationConfigs"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>>

notification_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#notification_configs GoogleHealthcareFhirStore#notification_configs}

---

##### `streamConfigs`<sup>Optional</sup> <a name="streamConfigs" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.streamConfigs"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>>

stream_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#stream_configs GoogleHealthcareFhirStore#stream_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts">GoogleHealthcareFhirStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#timeouts GoogleHealthcareFhirStore#timeouts}

---

##### `validationConfig`<sup>Optional</sup> <a name="validationConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.validationConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfig">GoogleHealthcareFhirStoreValidationConfig</a>

validation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#validation_config GoogleHealthcareFhirStore#validation_config}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.version"></a>

- *Type:* java.lang.String

The FHIR specification version. Default value: "STU3" Possible values: ["DSTU2", "STU3", "R4"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#version GoogleHealthcareFhirStore#version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putConsentConfig">putConsentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putNotificationConfig">putNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putNotificationConfigs">putNotificationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putStreamConfigs">putStreamConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putValidationConfig">putValidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetComplexDataTypeReferenceParsing">resetComplexDataTypeReferenceParsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetConsentConfig">resetConsentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetDefaultSearchHandlingStrict">resetDefaultSearchHandlingStrict</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetDisableReferentialIntegrity">resetDisableReferentialIntegrity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetDisableResourceVersioning">resetDisableResourceVersioning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetEnableHistoryImport">resetEnableHistoryImport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetEnableHistoryModifications">resetEnableHistoryModifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetEnableUpdateCreate">resetEnableUpdateCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetNotificationConfig">resetNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetNotificationConfigs">resetNotificationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetStreamConfigs">resetStreamConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetValidationConfig">resetValidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConsentConfig` <a name="putConsentConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putConsentConfig"></a>

```java
public void putConsentConfig(GoogleHealthcareFhirStoreConsentConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putConsentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfig">GoogleHealthcareFhirStoreConsentConfig</a>

---

##### `putNotificationConfig` <a name="putNotificationConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putNotificationConfig"></a>

```java
public void putNotificationConfig(GoogleHealthcareFhirStoreNotificationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putNotificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a>

---

##### `putNotificationConfigs` <a name="putNotificationConfigs" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putNotificationConfigs"></a>

```java
public void putNotificationConfigs(IResolvable|java.util.List<GoogleHealthcareFhirStoreNotificationConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putNotificationConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>>

---

##### `putStreamConfigs` <a name="putStreamConfigs" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putStreamConfigs"></a>

```java
public void putStreamConfigs(IResolvable|java.util.List<GoogleHealthcareFhirStoreStreamConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putStreamConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putTimeouts"></a>

```java
public void putTimeouts(GoogleHealthcareFhirStoreTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts">GoogleHealthcareFhirStoreTimeouts</a>

---

##### `putValidationConfig` <a name="putValidationConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putValidationConfig"></a>

```java
public void putValidationConfig(GoogleHealthcareFhirStoreValidationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putValidationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfig">GoogleHealthcareFhirStoreValidationConfig</a>

---

##### `resetComplexDataTypeReferenceParsing` <a name="resetComplexDataTypeReferenceParsing" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetComplexDataTypeReferenceParsing"></a>

```java
public void resetComplexDataTypeReferenceParsing()
```

##### `resetConsentConfig` <a name="resetConsentConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetConsentConfig"></a>

```java
public void resetConsentConfig()
```

##### `resetDefaultSearchHandlingStrict` <a name="resetDefaultSearchHandlingStrict" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetDefaultSearchHandlingStrict"></a>

```java
public void resetDefaultSearchHandlingStrict()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisableReferentialIntegrity` <a name="resetDisableReferentialIntegrity" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetDisableReferentialIntegrity"></a>

```java
public void resetDisableReferentialIntegrity()
```

##### `resetDisableResourceVersioning` <a name="resetDisableResourceVersioning" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetDisableResourceVersioning"></a>

```java
public void resetDisableResourceVersioning()
```

##### `resetEnableHistoryImport` <a name="resetEnableHistoryImport" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetEnableHistoryImport"></a>

```java
public void resetEnableHistoryImport()
```

##### `resetEnableHistoryModifications` <a name="resetEnableHistoryModifications" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetEnableHistoryModifications"></a>

```java
public void resetEnableHistoryModifications()
```

##### `resetEnableUpdateCreate` <a name="resetEnableUpdateCreate" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetEnableUpdateCreate"></a>

```java
public void resetEnableUpdateCreate()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetNotificationConfig` <a name="resetNotificationConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetNotificationConfig"></a>

```java
public void resetNotificationConfig()
```

##### `resetNotificationConfigs` <a name="resetNotificationConfigs" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetNotificationConfigs"></a>

```java
public void resetNotificationConfigs()
```

##### `resetStreamConfigs` <a name="resetStreamConfigs" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetStreamConfigs"></a>

```java
public void resetStreamConfigs()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetValidationConfig` <a name="resetValidationConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetValidationConfig"></a>

```java
public void resetValidationConfig()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetVersion"></a>

```java
public void resetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleHealthcareFhirStore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStore;

GoogleHealthcareFhirStore.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStore;

GoogleHealthcareFhirStore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStore;

GoogleHealthcareFhirStore.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStore;

GoogleHealthcareFhirStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleHealthcareFhirStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleHealthcareFhirStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleHealthcareFhirStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleHealthcareFhirStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleHealthcareFhirStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.consentConfig">consentConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference">GoogleHealthcareFhirStoreConsentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference">GoogleHealthcareFhirStoreNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfigs">notificationConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList">GoogleHealthcareFhirStoreNotificationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.streamConfigs">streamConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList">GoogleHealthcareFhirStoreStreamConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference">GoogleHealthcareFhirStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.validationConfig">validationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference">GoogleHealthcareFhirStoreValidationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.complexDataTypeReferenceParsingInput">complexDataTypeReferenceParsingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.consentConfigInput">consentConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfig">GoogleHealthcareFhirStoreConsentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.datasetInput">datasetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.defaultSearchHandlingStrictInput">defaultSearchHandlingStrictInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableReferentialIntegrityInput">disableReferentialIntegrityInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableResourceVersioningInput">disableResourceVersioningInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryImportInput">enableHistoryImportInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryModificationsInput">enableHistoryModificationsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableUpdateCreateInput">enableUpdateCreateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfigInput">notificationConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfigsInput">notificationConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.streamConfigsInput">streamConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts">GoogleHealthcareFhirStoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.validationConfigInput">validationConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfig">GoogleHealthcareFhirStoreValidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.complexDataTypeReferenceParsing">complexDataTypeReferenceParsing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.dataset">dataset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.defaultSearchHandlingStrict">defaultSearchHandlingStrict</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableReferentialIntegrity">disableReferentialIntegrity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableResourceVersioning">disableResourceVersioning</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryImport">enableHistoryImport</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryModifications">enableHistoryModifications</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableUpdateCreate">enableUpdateCreate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `consentConfig`<sup>Required</sup> <a name="consentConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.consentConfig"></a>

```java
public GoogleHealthcareFhirStoreConsentConfigOutputReference getConsentConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference">GoogleHealthcareFhirStoreConsentConfigOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `notificationConfig`<sup>Required</sup> <a name="notificationConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfig"></a>

```java
public GoogleHealthcareFhirStoreNotificationConfigOutputReference getNotificationConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference">GoogleHealthcareFhirStoreNotificationConfigOutputReference</a>

---

##### `notificationConfigs`<sup>Required</sup> <a name="notificationConfigs" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfigs"></a>

```java
public GoogleHealthcareFhirStoreNotificationConfigsList getNotificationConfigs();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList">GoogleHealthcareFhirStoreNotificationConfigsList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `streamConfigs`<sup>Required</sup> <a name="streamConfigs" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.streamConfigs"></a>

```java
public GoogleHealthcareFhirStoreStreamConfigsList getStreamConfigs();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList">GoogleHealthcareFhirStoreStreamConfigsList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.timeouts"></a>

```java
public GoogleHealthcareFhirStoreTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference">GoogleHealthcareFhirStoreTimeoutsOutputReference</a>

---

##### `validationConfig`<sup>Required</sup> <a name="validationConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.validationConfig"></a>

```java
public GoogleHealthcareFhirStoreValidationConfigOutputReference getValidationConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference">GoogleHealthcareFhirStoreValidationConfigOutputReference</a>

---

##### `complexDataTypeReferenceParsingInput`<sup>Optional</sup> <a name="complexDataTypeReferenceParsingInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.complexDataTypeReferenceParsingInput"></a>

```java
public java.lang.String getComplexDataTypeReferenceParsingInput();
```

- *Type:* java.lang.String

---

##### `consentConfigInput`<sup>Optional</sup> <a name="consentConfigInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.consentConfigInput"></a>

```java
public GoogleHealthcareFhirStoreConsentConfig getConsentConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfig">GoogleHealthcareFhirStoreConsentConfig</a>

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.datasetInput"></a>

```java
public java.lang.String getDatasetInput();
```

- *Type:* java.lang.String

---

##### `defaultSearchHandlingStrictInput`<sup>Optional</sup> <a name="defaultSearchHandlingStrictInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.defaultSearchHandlingStrictInput"></a>

```java
public java.lang.Boolean|IResolvable getDefaultSearchHandlingStrictInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `disableReferentialIntegrityInput`<sup>Optional</sup> <a name="disableReferentialIntegrityInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableReferentialIntegrityInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableReferentialIntegrityInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableResourceVersioningInput`<sup>Optional</sup> <a name="disableResourceVersioningInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableResourceVersioningInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableResourceVersioningInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableHistoryImportInput`<sup>Optional</sup> <a name="enableHistoryImportInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryImportInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableHistoryImportInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableHistoryModificationsInput`<sup>Optional</sup> <a name="enableHistoryModificationsInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryModificationsInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableHistoryModificationsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableUpdateCreateInput`<sup>Optional</sup> <a name="enableUpdateCreateInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableUpdateCreateInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableUpdateCreateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notificationConfigInput`<sup>Optional</sup> <a name="notificationConfigInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfigInput"></a>

```java
public GoogleHealthcareFhirStoreNotificationConfig getNotificationConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a>

---

##### `notificationConfigsInput`<sup>Optional</sup> <a name="notificationConfigsInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfigsInput"></a>

```java
public IResolvable|java.util.List<GoogleHealthcareFhirStoreNotificationConfigs> getNotificationConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>>

---

##### `streamConfigsInput`<sup>Optional</sup> <a name="streamConfigsInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.streamConfigsInput"></a>

```java
public IResolvable|java.util.List<GoogleHealthcareFhirStoreStreamConfigs> getStreamConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.timeoutsInput"></a>

```java
public IResolvable|GoogleHealthcareFhirStoreTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts">GoogleHealthcareFhirStoreTimeouts</a>

---

##### `validationConfigInput`<sup>Optional</sup> <a name="validationConfigInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.validationConfigInput"></a>

```java
public GoogleHealthcareFhirStoreValidationConfig getValidationConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfig">GoogleHealthcareFhirStoreValidationConfig</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `complexDataTypeReferenceParsing`<sup>Required</sup> <a name="complexDataTypeReferenceParsing" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.complexDataTypeReferenceParsing"></a>

```java
public java.lang.String getComplexDataTypeReferenceParsing();
```

- *Type:* java.lang.String

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

---

##### `defaultSearchHandlingStrict`<sup>Required</sup> <a name="defaultSearchHandlingStrict" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.defaultSearchHandlingStrict"></a>

```java
public java.lang.Boolean|IResolvable getDefaultSearchHandlingStrict();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `disableReferentialIntegrity`<sup>Required</sup> <a name="disableReferentialIntegrity" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableReferentialIntegrity"></a>

```java
public java.lang.Boolean|IResolvable getDisableReferentialIntegrity();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableResourceVersioning`<sup>Required</sup> <a name="disableResourceVersioning" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableResourceVersioning"></a>

```java
public java.lang.Boolean|IResolvable getDisableResourceVersioning();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableHistoryImport`<sup>Required</sup> <a name="enableHistoryImport" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryImport"></a>

```java
public java.lang.Boolean|IResolvable getEnableHistoryImport();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableHistoryModifications`<sup>Required</sup> <a name="enableHistoryModifications" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryModifications"></a>

```java
public java.lang.Boolean|IResolvable getEnableHistoryModifications();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableUpdateCreate`<sup>Required</sup> <a name="enableUpdateCreate" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableUpdateCreate"></a>

```java
public java.lang.Boolean|IResolvable getEnableUpdateCreate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleHealthcareFhirStoreConfig <a name="GoogleHealthcareFhirStoreConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStoreConfig;

GoogleHealthcareFhirStoreConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataset(java.lang.String)
    .name(java.lang.String)
//  .complexDataTypeReferenceParsing(java.lang.String)
//  .consentConfig(GoogleHealthcareFhirStoreConsentConfig)
//  .defaultSearchHandlingStrict(java.lang.Boolean|IResolvable)
//  .deletionPolicy(java.lang.String)
//  .disableReferentialIntegrity(java.lang.Boolean|IResolvable)
//  .disableResourceVersioning(java.lang.Boolean|IResolvable)
//  .enableHistoryImport(java.lang.Boolean|IResolvable)
//  .enableHistoryModifications(java.lang.Boolean|IResolvable)
//  .enableUpdateCreate(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .notificationConfig(GoogleHealthcareFhirStoreNotificationConfig)
//  .notificationConfigs(IResolvable|java.util.List<GoogleHealthcareFhirStoreNotificationConfigs>)
//  .streamConfigs(IResolvable|java.util.List<GoogleHealthcareFhirStoreStreamConfigs>)
//  .timeouts(GoogleHealthcareFhirStoreTimeouts)
//  .validationConfig(GoogleHealthcareFhirStoreValidationConfig)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.dataset">dataset</a></code> | <code>java.lang.String</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name for the FhirStore. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.complexDataTypeReferenceParsing">complexDataTypeReferenceParsing</a></code> | <code>java.lang.String</code> | Enable parsing of references within complex FHIR data types such as Extensions. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.consentConfig">consentConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfig">GoogleHealthcareFhirStoreConsentConfig</a></code> | consent_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.defaultSearchHandlingStrict">defaultSearchHandlingStrict</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, overrides the default search behavior for this FHIR store to handling=strict which returns an error for unrecognized search parameters. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.disableReferentialIntegrity">disableReferentialIntegrity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable referential integrity in this FHIR store. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.disableResourceVersioning">disableResourceVersioning</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable resource versioning for this FHIR store. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.enableHistoryImport">enableHistoryImport</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to allow the bulk import API to accept history bundles and directly insert historical resource versions into the FHIR store. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.enableHistoryModifications">enableHistoryModifications</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to allow the ExecuteBundle API to accept history bundles, and directly insert and overwrite historical resource versions into the FHIR store. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.enableUpdateCreate">enableUpdateCreate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether this FHIR store has the updateCreate capability. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#id GoogleHealthcareFhirStore#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-supplied key-value pairs used to organize FHIR stores. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.notificationConfigs">notificationConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>></code> | notification_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.streamConfigs">streamConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>></code> | stream_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts">GoogleHealthcareFhirStoreTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.validationConfig">validationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfig">GoogleHealthcareFhirStoreValidationConfig</a></code> | validation_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.version">version</a></code> | <code>java.lang.String</code> | The FHIR specification version. Default value: "STU3" Possible values: ["DSTU2", "STU3", "R4"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#dataset GoogleHealthcareFhirStore#dataset}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name for the FhirStore.

** Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#name GoogleHealthcareFhirStore#name}

---

##### `complexDataTypeReferenceParsing`<sup>Optional</sup> <a name="complexDataTypeReferenceParsing" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.complexDataTypeReferenceParsing"></a>

```java
public java.lang.String getComplexDataTypeReferenceParsing();
```

- *Type:* java.lang.String

Enable parsing of references within complex FHIR data types such as Extensions.

If this value is set to ENABLED, then features like referential integrity and Bundle reference rewriting apply to all references. If this flag has not been specified the behavior of the FHIR store will not change, references in complex data types will not be parsed. New stores will have this value set to ENABLED by default after a notification period. Warning: turning on this flag causes processing existing resources to fail if they contain references to non-existent resources. Possible values: ["COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED", "DISABLED", "ENABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#complex_data_type_reference_parsing GoogleHealthcareFhirStore#complex_data_type_reference_parsing}

---

##### `consentConfig`<sup>Optional</sup> <a name="consentConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.consentConfig"></a>

```java
public GoogleHealthcareFhirStoreConsentConfig getConsentConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfig">GoogleHealthcareFhirStoreConsentConfig</a>

consent_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#consent_config GoogleHealthcareFhirStore#consent_config}

---

##### `defaultSearchHandlingStrict`<sup>Optional</sup> <a name="defaultSearchHandlingStrict" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.defaultSearchHandlingStrict"></a>

```java
public java.lang.Boolean|IResolvable getDefaultSearchHandlingStrict();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, overrides the default search behavior for this FHIR store to handling=strict which returns an error for unrecognized search parameters.

If false, uses the FHIR specification default handling=lenient which ignores unrecognized search parameters.
The handling can always be changed from the default on an individual API call by setting the HTTP header Prefer: handling=strict or Prefer: handling=lenient.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#default_search_handling_strict GoogleHealthcareFhirStore#default_search_handling_strict}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#deletion_policy GoogleHealthcareFhirStore#deletion_policy}

---

##### `disableReferentialIntegrity`<sup>Optional</sup> <a name="disableReferentialIntegrity" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.disableReferentialIntegrity"></a>

```java
public java.lang.Boolean|IResolvable getDisableReferentialIntegrity();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable referential integrity in this FHIR store.

This field is immutable after FHIR store
creation. The default value is false, meaning that the API will enforce referential integrity and fail the
requests that will result in inconsistent state in the FHIR store. When this field is set to true, the API
will skip referential integrity check. Consequently, operations that rely on references, such as
Patient.get$everything, will not return all the results if broken references exist.

** Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#disable_referential_integrity GoogleHealthcareFhirStore#disable_referential_integrity}

---

##### `disableResourceVersioning`<sup>Optional</sup> <a name="disableResourceVersioning" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.disableResourceVersioning"></a>

```java
public java.lang.Boolean|IResolvable getDisableResourceVersioning();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable resource versioning for this FHIR store.

This field can not be changed after the creation
of FHIR store. If set to false, which is the default behavior, all write operations will cause historical
versions to be recorded automatically. The historical versions can be fetched through the history APIs, but
cannot be updated. If set to true, no historical versions will be kept. The server will send back errors for
attempts to read the historical versions.

** Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#disable_resource_versioning GoogleHealthcareFhirStore#disable_resource_versioning}

---

##### `enableHistoryImport`<sup>Optional</sup> <a name="enableHistoryImport" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.enableHistoryImport"></a>

```java
public java.lang.Boolean|IResolvable getEnableHistoryImport();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to allow the bulk import API to accept history bundles and directly insert historical resource versions into the FHIR store.

Importing resource histories creates resource interactions that appear to have
occurred in the past, which clients may not want to allow. If set to false, history bundles within an import
will fail with an error.

** Changing this property may recreate the FHIR store (removing all data) **

** This property can be changed manually in the Google Cloud Healthcare admin console without recreating the FHIR store **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#enable_history_import GoogleHealthcareFhirStore#enable_history_import}

---

##### `enableHistoryModifications`<sup>Optional</sup> <a name="enableHistoryModifications" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.enableHistoryModifications"></a>

```java
public java.lang.Boolean|IResolvable getEnableHistoryModifications();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to allow the ExecuteBundle API to accept history bundles, and directly insert and overwrite historical resource versions into the FHIR store.

If set to false, using history bundles fails with an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#enable_history_modifications GoogleHealthcareFhirStore#enable_history_modifications}

---

##### `enableUpdateCreate`<sup>Optional</sup> <a name="enableUpdateCreate" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.enableUpdateCreate"></a>

```java
public java.lang.Boolean|IResolvable getEnableUpdateCreate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether this FHIR store has the updateCreate capability.

This determines if the client can use an Update
operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through
the Create operation and attempts to Update a non-existent resource will return errors. Please treat the audit
logs with appropriate levels of care if client-specified resource IDs contain sensitive data such as patient
identifiers, those IDs will be part of the FHIR resource path recorded in Cloud audit logs and Cloud Pub/Sub
notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#enable_update_create GoogleHealthcareFhirStore#enable_update_create}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#id GoogleHealthcareFhirStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-supplied key-value pairs used to organize FHIR stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#labels GoogleHealthcareFhirStore#labels}

---

##### `notificationConfig`<sup>Optional</sup> <a name="notificationConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.notificationConfig"></a>

```java
public GoogleHealthcareFhirStoreNotificationConfig getNotificationConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#notification_config GoogleHealthcareFhirStore#notification_config}

---

##### `notificationConfigs`<sup>Optional</sup> <a name="notificationConfigs" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.notificationConfigs"></a>

```java
public IResolvable|java.util.List<GoogleHealthcareFhirStoreNotificationConfigs> getNotificationConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>>

notification_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#notification_configs GoogleHealthcareFhirStore#notification_configs}

---

##### `streamConfigs`<sup>Optional</sup> <a name="streamConfigs" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.streamConfigs"></a>

```java
public IResolvable|java.util.List<GoogleHealthcareFhirStoreStreamConfigs> getStreamConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>>

stream_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#stream_configs GoogleHealthcareFhirStore#stream_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.timeouts"></a>

```java
public GoogleHealthcareFhirStoreTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts">GoogleHealthcareFhirStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#timeouts GoogleHealthcareFhirStore#timeouts}

---

##### `validationConfig`<sup>Optional</sup> <a name="validationConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.validationConfig"></a>

```java
public GoogleHealthcareFhirStoreValidationConfig getValidationConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfig">GoogleHealthcareFhirStoreValidationConfig</a>

validation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#validation_config GoogleHealthcareFhirStore#validation_config}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The FHIR specification version. Default value: "STU3" Possible values: ["DSTU2", "STU3", "R4"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#version GoogleHealthcareFhirStore#version}

---

### GoogleHealthcareFhirStoreConsentConfig <a name="GoogleHealthcareFhirStoreConsentConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStoreConsentConfig;

GoogleHealthcareFhirStoreConsentConfig.builder()
    .version(java.lang.String)
//  .accessDeterminationLogConfig(GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfig)
//  .accessEnforced(java.lang.Boolean|IResolvable)
//  .consentHeaderHandling(GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandling)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfig.property.version">version</a></code> | <code>java.lang.String</code> | Specifies which consent enforcement version is being used for this FHIR store. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfig.property.accessDeterminationLogConfig">accessDeterminationLogConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfig">GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfig</a></code> | access_determination_log_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfig.property.accessEnforced">accessEnforced</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The default value is false. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfig.property.consentHeaderHandling">consentHeaderHandling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandling">GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandling</a></code> | consent_header_handling block. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Specifies which consent enforcement version is being used for this FHIR store.

This field can only be set once by either [fhirStores.create][] or [fhirStores.patch][]. After that, you must call [fhirStores.applyConsents][] to change the version. Possible values: ["CONSENT_ENFORCEMENT_VERSION_UNSPECIFIED", "V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#version GoogleHealthcareFhirStore#version}

---

##### `accessDeterminationLogConfig`<sup>Optional</sup> <a name="accessDeterminationLogConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfig.property.accessDeterminationLogConfig"></a>

```java
public GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfig getAccessDeterminationLogConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfig">GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfig</a>

access_determination_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#access_determination_log_config GoogleHealthcareFhirStore#access_determination_log_config}

---

##### `accessEnforced`<sup>Optional</sup> <a name="accessEnforced" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfig.property.accessEnforced"></a>

```java
public java.lang.Boolean|IResolvable getAccessEnforced();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The default value is false.

If set to true, when accessing FHIR resources, the consent headers will be verified against consents given by patients. See the ConsentEnforcementVersion for the supported consent headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#access_enforced GoogleHealthcareFhirStore#access_enforced}

---

##### `consentHeaderHandling`<sup>Optional</sup> <a name="consentHeaderHandling" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfig.property.consentHeaderHandling"></a>

```java
public GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandling getConsentHeaderHandling();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandling">GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandling</a>

consent_header_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#consent_header_handling GoogleHealthcareFhirStore#consent_header_handling}

---

### GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfig <a name="GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfig;

GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfig.builder()
//  .logLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfig.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | Controls the amount of detail to include as part of the audit logs. |

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfig.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

Controls the amount of detail to include as part of the audit logs.

Default value: "MINIMUM" Possible values: ["LOG_LEVEL_UNSPECIFIED", "DISABLED", "MINIMUM", "VERBOSE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#log_level GoogleHealthcareFhirStore#log_level}

---

### GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandling <a name="GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandling" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandling.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandling;

GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandling.builder()
//  .profile(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandling.property.profile">profile</a></code> | <code>java.lang.String</code> | Specifies the default server behavior when the header is empty. |

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandling.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

Specifies the default server behavior when the header is empty.

If not specified, the ScopeProfile.PERMIT_EMPTY_SCOPE option is used. Default value: "PERMIT_EMPTY_SCOPE" Possible values: ["SCOPE_PROFILE_UNSPECIFIED", "PERMIT_EMPTY_SCOPE", "REQUIRED_ON_READ"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#profile GoogleHealthcareFhirStore#profile}

---

### GoogleHealthcareFhirStoreNotificationConfig <a name="GoogleHealthcareFhirStoreNotificationConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStoreNotificationConfig;

GoogleHealthcareFhirStoreNotificationConfig.builder()
    .pubsubTopic(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig.property.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | The Cloud Pub/Sub topic that notifications of changes are published on. |

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig.property.pubsubTopic"></a>

```java
public java.lang.String getPubsubTopic();
```

- *Type:* java.lang.String

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#pubsub_topic GoogleHealthcareFhirStore#pubsub_topic}

---

### GoogleHealthcareFhirStoreNotificationConfigs <a name="GoogleHealthcareFhirStoreNotificationConfigs" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStoreNotificationConfigs;

GoogleHealthcareFhirStoreNotificationConfigs.builder()
    .pubsubTopic(java.lang.String)
//  .sendFullResource(java.lang.Boolean|IResolvable)
//  .sendPreviousResourceOnDelete(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.property.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | The Cloud Pub/Sub topic that notifications of changes are published on. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.property.sendFullResource">sendFullResource</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to send full FHIR resource to this Pub/Sub topic for Create and Update operation. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.property.sendPreviousResourceOnDelete">sendPreviousResourceOnDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to send full FHIR resource to this Pub/Sub topic for deleting FHIR resource. |

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.property.pubsubTopic"></a>

```java
public java.lang.String getPubsubTopic();
```

- *Type:* java.lang.String

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#pubsub_topic GoogleHealthcareFhirStore#pubsub_topic}

---

##### `sendFullResource`<sup>Optional</sup> <a name="sendFullResource" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.property.sendFullResource"></a>

```java
public java.lang.Boolean|IResolvable getSendFullResource();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to send full FHIR resource to this Pub/Sub topic for Create and Update operation.

Note that setting this to true does not guarantee that all resources will be sent in the format of
full FHIR resource. When a resource change is too large or during heavy traffic, only the resource name will be
sent. Clients should always check the "payloadType" label from a Pub/Sub message to determine whether
it needs to fetch the full resource as a separate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#send_full_resource GoogleHealthcareFhirStore#send_full_resource}

---

##### `sendPreviousResourceOnDelete`<sup>Optional</sup> <a name="sendPreviousResourceOnDelete" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.property.sendPreviousResourceOnDelete"></a>

```java
public java.lang.Boolean|IResolvable getSendPreviousResourceOnDelete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to send full FHIR resource to this Pub/Sub topic for deleting FHIR resource.

Note that setting this to
true does not guarantee that all previous resources will be sent in the format of full FHIR resource. When a
resource change is too large or during heavy traffic, only the resource name will be sent. Clients should always
check the "payloadType" label from a Pub/Sub message to determine whether it needs to fetch the full previous
resource as a separate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#send_previous_resource_on_delete GoogleHealthcareFhirStore#send_previous_resource_on_delete}

---

### GoogleHealthcareFhirStoreStreamConfigs <a name="GoogleHealthcareFhirStoreStreamConfigs" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStoreStreamConfigs;

GoogleHealthcareFhirStoreStreamConfigs.builder()
    .bigqueryDestination(GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination)
//  .resourceTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs.property.bigqueryDestination">bigqueryDestination</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination</a></code> | bigquery_destination block. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Supply a FHIR resource type (such as "Patient" or "Observation"). |

---

##### `bigqueryDestination`<sup>Required</sup> <a name="bigqueryDestination" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs.property.bigqueryDestination"></a>

```java
public GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination getBigqueryDestination();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination</a>

bigquery_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#bigquery_destination GoogleHealthcareFhirStore#bigquery_destination}

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

Supply a FHIR resource type (such as "Patient" or "Observation").

See
https://www.hl7.org/fhir/valueset-resource-types.html for a list of all FHIR resource types. The server treats
an empty list as an intent to stream all the supported resource types in this FHIR store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#resource_types GoogleHealthcareFhirStore#resource_types}

---

### GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination <a name="GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination;

GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination.builder()
    .datasetUri(java.lang.String)
    .schemaConfig(GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination.property.datasetUri">datasetUri</a></code> | <code>java.lang.String</code> | BigQuery URI to a dataset, up to 2000 characters long, in the format bq://projectId.bqDatasetId. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination.property.schemaConfig">schemaConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a></code> | schema_config block. |

---

##### `datasetUri`<sup>Required</sup> <a name="datasetUri" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination.property.datasetUri"></a>

```java
public java.lang.String getDatasetUri();
```

- *Type:* java.lang.String

BigQuery URI to a dataset, up to 2000 characters long, in the format bq://projectId.bqDatasetId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#dataset_uri GoogleHealthcareFhirStore#dataset_uri}

---

##### `schemaConfig`<sup>Required</sup> <a name="schemaConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination.property.schemaConfig"></a>

```java
public GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig getSchemaConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

schema_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#schema_config GoogleHealthcareFhirStore#schema_config}

---

### GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig <a name="GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig;

GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.builder()
    .recursiveStructureDepth(java.lang.Number)
//  .lastUpdatedPartitionConfig(GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig)
//  .schemaType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.recursiveStructureDepth">recursiveStructureDepth</a></code> | <code>java.lang.Number</code> | The depth for all recursive structures in the output analytics schema. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.lastUpdatedPartitionConfig">lastUpdatedPartitionConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a></code> | last_updated_partition_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.schemaType">schemaType</a></code> | <code>java.lang.String</code> | Specifies the output schema type. |

---

##### `recursiveStructureDepth`<sup>Required</sup> <a name="recursiveStructureDepth" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.recursiveStructureDepth"></a>

```java
public java.lang.Number getRecursiveStructureDepth();
```

- *Type:* java.lang.Number

The depth for all recursive structures in the output analytics schema.

For example, concept in the CodeSystem
resource is a recursive structure; when the depth is 2, the CodeSystem table will have a column called
concept.concept but not concept.concept.concept. If not specified or set to 0, the server will use the default
value 2. The maximum depth allowed is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#recursive_structure_depth GoogleHealthcareFhirStore#recursive_structure_depth}

---

##### `lastUpdatedPartitionConfig`<sup>Optional</sup> <a name="lastUpdatedPartitionConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.lastUpdatedPartitionConfig"></a>

```java
public GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig getLastUpdatedPartitionConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

last_updated_partition_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#last_updated_partition_config GoogleHealthcareFhirStore#last_updated_partition_config}

---

##### `schemaType`<sup>Optional</sup> <a name="schemaType" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.schemaType"></a>

```java
public java.lang.String getSchemaType();
```

- *Type:* java.lang.String

Specifies the output schema type.

* ANALYTICS: Analytics schema defined by the FHIR community.
  See https://github.com/FHIR/sql-on-fhir/blob/master/sql-on-fhir.md.
* ANALYTICS_V2: Analytics V2, similar to schema defined by the FHIR community, with added support for extensions with one or more occurrences and contained resources in stringified JSON.
* LOSSLESS: A data-driven schema generated from the fields present in the FHIR data being exported, with no additional simplification. Default value: "ANALYTICS" Possible values: ["ANALYTICS", "ANALYTICS_V2", "LOSSLESS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#schema_type GoogleHealthcareFhirStore#schema_type}

---

### GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig <a name="GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig;

GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.builder()
    .type(java.lang.String)
//  .expirationMs(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.type">type</a></code> | <code>java.lang.String</code> | Type of partitioning. Possible values: ["PARTITION_TYPE_UNSPECIFIED", "HOUR", "DAY", "MONTH", "YEAR"]. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.expirationMs">expirationMs</a></code> | <code>java.lang.String</code> | Number of milliseconds for which to keep the storage for a partition. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of partitioning. Possible values: ["PARTITION_TYPE_UNSPECIFIED", "HOUR", "DAY", "MONTH", "YEAR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#type GoogleHealthcareFhirStore#type}

---

##### `expirationMs`<sup>Optional</sup> <a name="expirationMs" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.expirationMs"></a>

```java
public java.lang.String getExpirationMs();
```

- *Type:* java.lang.String

Number of milliseconds for which to keep the storage for a partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#expiration_ms GoogleHealthcareFhirStore#expiration_ms}

---

### GoogleHealthcareFhirStoreTimeouts <a name="GoogleHealthcareFhirStoreTimeouts" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStoreTimeouts;

GoogleHealthcareFhirStoreTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#create GoogleHealthcareFhirStore#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#delete GoogleHealthcareFhirStore#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#update GoogleHealthcareFhirStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#create GoogleHealthcareFhirStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#delete GoogleHealthcareFhirStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#update GoogleHealthcareFhirStore#update}.

---

### GoogleHealthcareFhirStoreValidationConfig <a name="GoogleHealthcareFhirStoreValidationConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStoreValidationConfig;

GoogleHealthcareFhirStoreValidationConfig.builder()
//  .disableFhirpathValidation(java.lang.Boolean|IResolvable)
//  .disableProfileValidation(java.lang.Boolean|IResolvable)
//  .disableReferenceTypeValidation(java.lang.Boolean|IResolvable)
//  .disableRequiredFieldValidation(java.lang.Boolean|IResolvable)
//  .enabledImplementationGuides(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfig.property.disableFhirpathValidation">disableFhirpathValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable FHIRPath validation for incoming resources. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfig.property.disableProfileValidation">disableProfileValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable profile validation for this FHIR store. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfig.property.disableReferenceTypeValidation">disableReferenceTypeValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable reference type validation for incoming resources. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfig.property.disableRequiredFieldValidation">disableRequiredFieldValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable required fields validation for incoming resources. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfig.property.enabledImplementationGuides">enabledImplementationGuides</a></code> | <code>java.util.List<java.lang.String></code> | A list of implementation guide URLs in this FHIR store that are used to configure the profiles to use for validation. |

---

##### `disableFhirpathValidation`<sup>Optional</sup> <a name="disableFhirpathValidation" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfig.property.disableFhirpathValidation"></a>

```java
public java.lang.Boolean|IResolvable getDisableFhirpathValidation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable FHIRPath validation for incoming resources.

The default value is false. Set this to true to disable checking incoming resources for conformance against FHIRPath requirement defined in the FHIR specification. This property only affects resource types that do not have profiles configured for them, any rules in enabled implementation guides will still be enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#disable_fhirpath_validation GoogleHealthcareFhirStore#disable_fhirpath_validation}

---

##### `disableProfileValidation`<sup>Optional</sup> <a name="disableProfileValidation" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfig.property.disableProfileValidation"></a>

```java
public java.lang.Boolean|IResolvable getDisableProfileValidation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable profile validation for this FHIR store.

The default value is false. Set this to true to disable checking incoming resources for conformance against structure definitions in this FHIR store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#disable_profile_validation GoogleHealthcareFhirStore#disable_profile_validation}

---

##### `disableReferenceTypeValidation`<sup>Optional</sup> <a name="disableReferenceTypeValidation" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfig.property.disableReferenceTypeValidation"></a>

```java
public java.lang.Boolean|IResolvable getDisableReferenceTypeValidation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable reference type validation for incoming resources.

The default value is false. Set this to true to disable checking incoming resources for conformance against reference type requirement defined in the FHIR specification. This property only affects resource types that do not have profiles configured for them, any rules in enabled implementation guides will still be enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#disable_reference_type_validation GoogleHealthcareFhirStore#disable_reference_type_validation}

---

##### `disableRequiredFieldValidation`<sup>Optional</sup> <a name="disableRequiredFieldValidation" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfig.property.disableRequiredFieldValidation"></a>

```java
public java.lang.Boolean|IResolvable getDisableRequiredFieldValidation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable required fields validation for incoming resources.

The default value is false. Set this to true to disable checking incoming resources for conformance against required fields requirement defined in the FHIR specification. This property only affects resource types that do not have profiles configured for them, any rules in enabled implementation guides will still be enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#disable_required_field_validation GoogleHealthcareFhirStore#disable_required_field_validation}

---

##### `enabledImplementationGuides`<sup>Optional</sup> <a name="enabledImplementationGuides" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfig.property.enabledImplementationGuides"></a>

```java
public java.util.List<java.lang.String> getEnabledImplementationGuides();
```

- *Type:* java.util.List<java.lang.String>

A list of implementation guide URLs in this FHIR store that are used to configure the profiles to use for validation.

When a URL cannot be resolved (for example, in a type assertion), the server does not return an error.
For example, to use the US Core profiles for validation, set enabledImplementationGuides to ["http://hl7.org/fhir/us/core/ImplementationGuide/ig"]. If enabledImplementationGuides is empty or omitted, then incoming resources are only required to conform to the base FHIR profiles. Otherwise, a resource must conform to at least one profile listed in the global property of one of the enabled ImplementationGuides.
The Cloud Healthcare API does not currently enforce all of the rules in a StructureDefinition. The following rules are supported:

* min/max
* minValue/maxValue
* maxLength
* type
* fixed[x]
* pattern[x] on simple types
* slicing, when using "value" as the discriminator type

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_healthcare_fhir_store#enabled_implementation_guides GoogleHealthcareFhirStore#enabled_implementation_guides}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference <a name="GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference;

new GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.resetLogLevel">resetLogLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.resetLogLevel"></a>

```java
public void resetLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.property.logLevelInput">logLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfig">GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.property.logLevelInput"></a>

```java
public java.lang.String getLogLevelInput();
```

- *Type:* java.lang.String

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference.property.internalValue"></a>

```java
public GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfig">GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfig</a>

---


### GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference <a name="GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference;

new GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.resetProfile">resetProfile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProfile` <a name="resetProfile" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.resetProfile"></a>

```java
public void resetProfile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.property.profileInput">profileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.property.profile">profile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandling">GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.property.profileInput"></a>

```java
public java.lang.String getProfileInput();
```

- *Type:* java.lang.String

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference.property.internalValue"></a>

```java
public GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandling getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandling">GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandling</a>

---


### GoogleHealthcareFhirStoreConsentConfigOutputReference <a name="GoogleHealthcareFhirStoreConsentConfigOutputReference" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStoreConsentConfigOutputReference;

new GoogleHealthcareFhirStoreConsentConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.putAccessDeterminationLogConfig">putAccessDeterminationLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.putConsentHeaderHandling">putConsentHeaderHandling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.resetAccessDeterminationLogConfig">resetAccessDeterminationLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.resetAccessEnforced">resetAccessEnforced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.resetConsentHeaderHandling">resetConsentHeaderHandling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessDeterminationLogConfig` <a name="putAccessDeterminationLogConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.putAccessDeterminationLogConfig"></a>

```java
public void putAccessDeterminationLogConfig(GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.putAccessDeterminationLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfig">GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfig</a>

---

##### `putConsentHeaderHandling` <a name="putConsentHeaderHandling" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.putConsentHeaderHandling"></a>

```java
public void putConsentHeaderHandling(GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.putConsentHeaderHandling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandling">GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandling</a>

---

##### `resetAccessDeterminationLogConfig` <a name="resetAccessDeterminationLogConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.resetAccessDeterminationLogConfig"></a>

```java
public void resetAccessDeterminationLogConfig()
```

##### `resetAccessEnforced` <a name="resetAccessEnforced" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.resetAccessEnforced"></a>

```java
public void resetAccessEnforced()
```

##### `resetConsentHeaderHandling` <a name="resetConsentHeaderHandling" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.resetConsentHeaderHandling"></a>

```java
public void resetConsentHeaderHandling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.property.accessDeterminationLogConfig">accessDeterminationLogConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference">GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.property.consentHeaderHandling">consentHeaderHandling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference">GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.property.enforcedAdminConsents">enforcedAdminConsents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.property.accessDeterminationLogConfigInput">accessDeterminationLogConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfig">GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.property.accessEnforcedInput">accessEnforcedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.property.consentHeaderHandlingInput">consentHeaderHandlingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandling">GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.property.accessEnforced">accessEnforced</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfig">GoogleHealthcareFhirStoreConsentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessDeterminationLogConfig`<sup>Required</sup> <a name="accessDeterminationLogConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.property.accessDeterminationLogConfig"></a>

```java
public GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference getAccessDeterminationLogConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference">GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfigOutputReference</a>

---

##### `consentHeaderHandling`<sup>Required</sup> <a name="consentHeaderHandling" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.property.consentHeaderHandling"></a>

```java
public GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference getConsentHeaderHandling();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference">GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandlingOutputReference</a>

---

##### `enforcedAdminConsents`<sup>Required</sup> <a name="enforcedAdminConsents" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.property.enforcedAdminConsents"></a>

```java
public java.util.List<java.lang.String> getEnforcedAdminConsents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessDeterminationLogConfigInput`<sup>Optional</sup> <a name="accessDeterminationLogConfigInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.property.accessDeterminationLogConfigInput"></a>

```java
public GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfig getAccessDeterminationLogConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfig">GoogleHealthcareFhirStoreConsentConfigAccessDeterminationLogConfig</a>

---

##### `accessEnforcedInput`<sup>Optional</sup> <a name="accessEnforcedInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.property.accessEnforcedInput"></a>

```java
public java.lang.Boolean|IResolvable getAccessEnforcedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `consentHeaderHandlingInput`<sup>Optional</sup> <a name="consentHeaderHandlingInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.property.consentHeaderHandlingInput"></a>

```java
public GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandling getConsentHeaderHandlingInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandling">GoogleHealthcareFhirStoreConsentConfigConsentHeaderHandling</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `accessEnforced`<sup>Required</sup> <a name="accessEnforced" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.property.accessEnforced"></a>

```java
public java.lang.Boolean|IResolvable getAccessEnforced();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfigOutputReference.property.internalValue"></a>

```java
public GoogleHealthcareFhirStoreConsentConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConsentConfig">GoogleHealthcareFhirStoreConsentConfig</a>

---


### GoogleHealthcareFhirStoreNotificationConfigOutputReference <a name="GoogleHealthcareFhirStoreNotificationConfigOutputReference" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStoreNotificationConfigOutputReference;

new GoogleHealthcareFhirStoreNotificationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopicInput">pubsubTopicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pubsubTopicInput`<sup>Optional</sup> <a name="pubsubTopicInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopicInput"></a>

```java
public java.lang.String getPubsubTopicInput();
```

- *Type:* java.lang.String

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopic"></a>

```java
public java.lang.String getPubsubTopic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.internalValue"></a>

```java
public GoogleHealthcareFhirStoreNotificationConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a>

---


### GoogleHealthcareFhirStoreNotificationConfigsList <a name="GoogleHealthcareFhirStoreNotificationConfigsList" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStoreNotificationConfigsList;

new GoogleHealthcareFhirStoreNotificationConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.get"></a>

```java
public GoogleHealthcareFhirStoreNotificationConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleHealthcareFhirStoreNotificationConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>>

---


### GoogleHealthcareFhirStoreNotificationConfigsOutputReference <a name="GoogleHealthcareFhirStoreNotificationConfigsOutputReference" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStoreNotificationConfigsOutputReference;

new GoogleHealthcareFhirStoreNotificationConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resetSendFullResource">resetSendFullResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resetSendPreviousResourceOnDelete">resetSendPreviousResourceOnDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSendFullResource` <a name="resetSendFullResource" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resetSendFullResource"></a>

```java
public void resetSendFullResource()
```

##### `resetSendPreviousResourceOnDelete` <a name="resetSendPreviousResourceOnDelete" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resetSendPreviousResourceOnDelete"></a>

```java
public void resetSendPreviousResourceOnDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.pubsubTopicInput">pubsubTopicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendFullResourceInput">sendFullResourceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendPreviousResourceOnDeleteInput">sendPreviousResourceOnDeleteInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendFullResource">sendFullResource</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendPreviousResourceOnDelete">sendPreviousResourceOnDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pubsubTopicInput`<sup>Optional</sup> <a name="pubsubTopicInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.pubsubTopicInput"></a>

```java
public java.lang.String getPubsubTopicInput();
```

- *Type:* java.lang.String

---

##### `sendFullResourceInput`<sup>Optional</sup> <a name="sendFullResourceInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendFullResourceInput"></a>

```java
public java.lang.Boolean|IResolvable getSendFullResourceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sendPreviousResourceOnDeleteInput`<sup>Optional</sup> <a name="sendPreviousResourceOnDeleteInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendPreviousResourceOnDeleteInput"></a>

```java
public java.lang.Boolean|IResolvable getSendPreviousResourceOnDeleteInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.pubsubTopic"></a>

```java
public java.lang.String getPubsubTopic();
```

- *Type:* java.lang.String

---

##### `sendFullResource`<sup>Required</sup> <a name="sendFullResource" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendFullResource"></a>

```java
public java.lang.Boolean|IResolvable getSendFullResource();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sendPreviousResourceOnDelete`<sup>Required</sup> <a name="sendPreviousResourceOnDelete" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendPreviousResourceOnDelete"></a>

```java
public java.lang.Boolean|IResolvable getSendPreviousResourceOnDelete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleHealthcareFhirStoreNotificationConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>

---


### GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference <a name="GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference;

new GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.putSchemaConfig">putSchemaConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchemaConfig` <a name="putSchemaConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.putSchemaConfig"></a>

```java
public void putSchemaConfig(GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.putSchemaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfig">schemaConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUriInput">datasetUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfigInput">schemaConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUri">datasetUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `schemaConfig`<sup>Required</sup> <a name="schemaConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfig"></a>

```java
public GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference getSchemaConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference</a>

---

##### `datasetUriInput`<sup>Optional</sup> <a name="datasetUriInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUriInput"></a>

```java
public java.lang.String getDatasetUriInput();
```

- *Type:* java.lang.String

---

##### `schemaConfigInput`<sup>Optional</sup> <a name="schemaConfigInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfigInput"></a>

```java
public GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig getSchemaConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

---

##### `datasetUri`<sup>Required</sup> <a name="datasetUri" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUri"></a>

```java
public java.lang.String getDatasetUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.internalValue"></a>

```java
public GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination</a>

---


### GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference <a name="GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference;

new GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resetExpirationMs">resetExpirationMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpirationMs` <a name="resetExpirationMs" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resetExpirationMs"></a>

```java
public void resetExpirationMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMsInput">expirationMsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMs">expirationMs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expirationMsInput`<sup>Optional</sup> <a name="expirationMsInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMsInput"></a>

```java
public java.lang.String getExpirationMsInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `expirationMs`<sup>Required</sup> <a name="expirationMs" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMs"></a>

```java
public java.lang.String getExpirationMs();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.internalValue"></a>

```java
public GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

---


### GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference <a name="GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference;

new GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.putLastUpdatedPartitionConfig">putLastUpdatedPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetLastUpdatedPartitionConfig">resetLastUpdatedPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetSchemaType">resetSchemaType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLastUpdatedPartitionConfig` <a name="putLastUpdatedPartitionConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.putLastUpdatedPartitionConfig"></a>

```java
public void putLastUpdatedPartitionConfig(GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.putLastUpdatedPartitionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

---

##### `resetLastUpdatedPartitionConfig` <a name="resetLastUpdatedPartitionConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetLastUpdatedPartitionConfig"></a>

```java
public void resetLastUpdatedPartitionConfig()
```

##### `resetSchemaType` <a name="resetSchemaType" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetSchemaType"></a>

```java
public void resetSchemaType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfig">lastUpdatedPartitionConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfigInput">lastUpdatedPartitionConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepthInput">recursiveStructureDepthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaTypeInput">schemaTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepth">recursiveStructureDepth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaType">schemaType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastUpdatedPartitionConfig`<sup>Required</sup> <a name="lastUpdatedPartitionConfig" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfig"></a>

```java
public GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference getLastUpdatedPartitionConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference</a>

---

##### `lastUpdatedPartitionConfigInput`<sup>Optional</sup> <a name="lastUpdatedPartitionConfigInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfigInput"></a>

```java
public GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig getLastUpdatedPartitionConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

---

##### `recursiveStructureDepthInput`<sup>Optional</sup> <a name="recursiveStructureDepthInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepthInput"></a>

```java
public java.lang.Number getRecursiveStructureDepthInput();
```

- *Type:* java.lang.Number

---

##### `schemaTypeInput`<sup>Optional</sup> <a name="schemaTypeInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaTypeInput"></a>

```java
public java.lang.String getSchemaTypeInput();
```

- *Type:* java.lang.String

---

##### `recursiveStructureDepth`<sup>Required</sup> <a name="recursiveStructureDepth" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepth"></a>

```java
public java.lang.Number getRecursiveStructureDepth();
```

- *Type:* java.lang.Number

---

##### `schemaType`<sup>Required</sup> <a name="schemaType" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaType"></a>

```java
public java.lang.String getSchemaType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.internalValue"></a>

```java
public GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

---


### GoogleHealthcareFhirStoreStreamConfigsList <a name="GoogleHealthcareFhirStoreStreamConfigsList" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStoreStreamConfigsList;

new GoogleHealthcareFhirStoreStreamConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.get"></a>

```java
public GoogleHealthcareFhirStoreStreamConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleHealthcareFhirStoreStreamConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>>

---


### GoogleHealthcareFhirStoreStreamConfigsOutputReference <a name="GoogleHealthcareFhirStoreStreamConfigsOutputReference" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStoreStreamConfigsOutputReference;

new GoogleHealthcareFhirStoreStreamConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.putBigqueryDestination">putBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBigqueryDestination` <a name="putBigqueryDestination" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.putBigqueryDestination"></a>

```java
public void putBigqueryDestination(GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.putBigqueryDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination</a>

---

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.resetResourceTypes"></a>

```java
public void resetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestination">bigqueryDestination</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestinationInput">bigqueryDestinationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bigqueryDestination`<sup>Required</sup> <a name="bigqueryDestination" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestination"></a>

```java
public GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference getBigqueryDestination();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference</a>

---

##### `bigqueryDestinationInput`<sup>Optional</sup> <a name="bigqueryDestinationInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestinationInput"></a>

```java
public GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination getBigqueryDestinationInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination</a>

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleHealthcareFhirStoreStreamConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>

---


### GoogleHealthcareFhirStoreTimeoutsOutputReference <a name="GoogleHealthcareFhirStoreTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStoreTimeoutsOutputReference;

new GoogleHealthcareFhirStoreTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts">GoogleHealthcareFhirStoreTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleHealthcareFhirStoreTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts">GoogleHealthcareFhirStoreTimeouts</a>

---


### GoogleHealthcareFhirStoreValidationConfigOutputReference <a name="GoogleHealthcareFhirStoreValidationConfigOutputReference" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_healthcare_fhir_store.GoogleHealthcareFhirStoreValidationConfigOutputReference;

new GoogleHealthcareFhirStoreValidationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.resetDisableFhirpathValidation">resetDisableFhirpathValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.resetDisableProfileValidation">resetDisableProfileValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.resetDisableReferenceTypeValidation">resetDisableReferenceTypeValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.resetDisableRequiredFieldValidation">resetDisableRequiredFieldValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.resetEnabledImplementationGuides">resetEnabledImplementationGuides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableFhirpathValidation` <a name="resetDisableFhirpathValidation" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.resetDisableFhirpathValidation"></a>

```java
public void resetDisableFhirpathValidation()
```

##### `resetDisableProfileValidation` <a name="resetDisableProfileValidation" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.resetDisableProfileValidation"></a>

```java
public void resetDisableProfileValidation()
```

##### `resetDisableReferenceTypeValidation` <a name="resetDisableReferenceTypeValidation" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.resetDisableReferenceTypeValidation"></a>

```java
public void resetDisableReferenceTypeValidation()
```

##### `resetDisableRequiredFieldValidation` <a name="resetDisableRequiredFieldValidation" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.resetDisableRequiredFieldValidation"></a>

```java
public void resetDisableRequiredFieldValidation()
```

##### `resetEnabledImplementationGuides` <a name="resetEnabledImplementationGuides" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.resetEnabledImplementationGuides"></a>

```java
public void resetEnabledImplementationGuides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.property.disableFhirpathValidationInput">disableFhirpathValidationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.property.disableProfileValidationInput">disableProfileValidationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.property.disableReferenceTypeValidationInput">disableReferenceTypeValidationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.property.disableRequiredFieldValidationInput">disableRequiredFieldValidationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.property.enabledImplementationGuidesInput">enabledImplementationGuidesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.property.disableFhirpathValidation">disableFhirpathValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.property.disableProfileValidation">disableProfileValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.property.disableReferenceTypeValidation">disableReferenceTypeValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.property.disableRequiredFieldValidation">disableRequiredFieldValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.property.enabledImplementationGuides">enabledImplementationGuides</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfig">GoogleHealthcareFhirStoreValidationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disableFhirpathValidationInput`<sup>Optional</sup> <a name="disableFhirpathValidationInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.property.disableFhirpathValidationInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableFhirpathValidationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableProfileValidationInput`<sup>Optional</sup> <a name="disableProfileValidationInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.property.disableProfileValidationInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableProfileValidationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableReferenceTypeValidationInput`<sup>Optional</sup> <a name="disableReferenceTypeValidationInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.property.disableReferenceTypeValidationInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableReferenceTypeValidationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableRequiredFieldValidationInput`<sup>Optional</sup> <a name="disableRequiredFieldValidationInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.property.disableRequiredFieldValidationInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableRequiredFieldValidationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabledImplementationGuidesInput`<sup>Optional</sup> <a name="enabledImplementationGuidesInput" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.property.enabledImplementationGuidesInput"></a>

```java
public java.util.List<java.lang.String> getEnabledImplementationGuidesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disableFhirpathValidation`<sup>Required</sup> <a name="disableFhirpathValidation" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.property.disableFhirpathValidation"></a>

```java
public java.lang.Boolean|IResolvable getDisableFhirpathValidation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableProfileValidation`<sup>Required</sup> <a name="disableProfileValidation" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.property.disableProfileValidation"></a>

```java
public java.lang.Boolean|IResolvable getDisableProfileValidation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableReferenceTypeValidation`<sup>Required</sup> <a name="disableReferenceTypeValidation" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.property.disableReferenceTypeValidation"></a>

```java
public java.lang.Boolean|IResolvable getDisableReferenceTypeValidation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableRequiredFieldValidation`<sup>Required</sup> <a name="disableRequiredFieldValidation" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.property.disableRequiredFieldValidation"></a>

```java
public java.lang.Boolean|IResolvable getDisableRequiredFieldValidation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabledImplementationGuides`<sup>Required</sup> <a name="enabledImplementationGuides" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.property.enabledImplementationGuides"></a>

```java
public java.util.List<java.lang.String> getEnabledImplementationGuides();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfigOutputReference.property.internalValue"></a>

```java
public GoogleHealthcareFhirStoreValidationConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreValidationConfig">GoogleHealthcareFhirStoreValidationConfig</a>

---



