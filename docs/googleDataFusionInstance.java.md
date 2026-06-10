# `googleDataFusionInstance` Submodule <a name="`googleDataFusionInstance` Submodule" id="@cdktn/provider-google-beta.googleDataFusionInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataFusionInstance <a name="GoogleDataFusionInstance" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance google_data_fusion_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstance;

GoogleDataFusionInstance.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .type(java.lang.String)
//  .accelerators(IResolvable|java.util.List<GoogleDataFusionInstanceAccelerators>)
//  .cryptoKeyConfig(GoogleDataFusionInstanceCryptoKeyConfig)
//  .dataprocServiceAccount(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .enableRbac(java.lang.Boolean|IResolvable)
//  .enableStackdriverLogging(java.lang.Boolean|IResolvable)
//  .enableStackdriverMonitoring(java.lang.Boolean|IResolvable)
//  .eventPublishConfig(GoogleDataFusionInstanceEventPublishConfig)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .maintenancePolicy(GoogleDataFusionInstanceMaintenancePolicy)
//  .networkConfig(GoogleDataFusionInstanceNetworkConfig)
//  .options(java.util.Map<java.lang.String, java.lang.String>)
//  .patchRevision(java.lang.String)
//  .privateInstance(java.lang.Boolean|IResolvable)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(GoogleDataFusionInstanceTimeouts)
//  .version(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The ID of the instance or a fully qualified identifier for the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Represents the type of Data Fusion instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.accelerators">accelerators</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a>></code> | accelerators block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.cryptoKeyConfig">cryptoKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a></code> | crypto_key_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.dataprocServiceAccount">dataprocServiceAccount</a></code> | <code>java.lang.String</code> | User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name for an instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.enableRbac">enableRbac</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Option to enable granular role-based access control. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.enableStackdriverLogging">enableStackdriverLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Option to enable Stackdriver Logging. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.enableStackdriverMonitoring">enableStackdriverMonitoring</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Option to enable Stackdriver Monitoring. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.eventPublishConfig">eventPublishConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a></code> | event_publish_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#id GoogleDataFusionInstance#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The resource labels for instance to use to annotate any related underlying resources, such as Compute Engine VMs. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicy">GoogleDataFusionInstanceMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.networkConfig">networkConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of additional options used to configure the behavior of Data Fusion instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.patchRevision">patchRevision</a></code> | <code>java.lang.String</code> | Current patch revision of the Data Fusion. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.privateInstance">privateInstance</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the Data Fusion instance should be private. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#project GoogleDataFusionInstance#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of the Data Fusion instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of resource manager tags. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts">GoogleDataFusionInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Current version of the Data Fusion. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The ID of the instance or a fully qualified identifier for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#name GoogleDataFusionInstance#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Represents the type of Data Fusion instance.

Each type is configured with
the default settings for processing and memory.

* BASIC: Basic Data Fusion instance. In Basic type, the user will be able to create data pipelines
  using point and click UI. However, there are certain limitations, such as fewer number
  of concurrent pipelines, no support for streaming pipelines, etc.
* ENTERPRISE: Enterprise Data Fusion instance. In Enterprise type, the user will have more features
  available, such as support for streaming pipelines, higher number of concurrent pipelines, etc.
* DEVELOPER: Developer Data Fusion instance. In Developer type, the user will have all features available but
  with restrictive capabilities. This is to help enterprises design and develop their data ingestion and integration
  pipelines at low cost. Possible values: ["BASIC", "ENTERPRISE", "DEVELOPER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#type GoogleDataFusionInstance#type}

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.accelerators"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a>>

accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#accelerators GoogleDataFusionInstance#accelerators}

---

##### `cryptoKeyConfig`<sup>Optional</sup> <a name="cryptoKeyConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.cryptoKeyConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a>

crypto_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#crypto_key_config GoogleDataFusionInstance#crypto_key_config}

---

##### `dataprocServiceAccount`<sup>Optional</sup> <a name="dataprocServiceAccount" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.dataprocServiceAccount"></a>

- *Type:* java.lang.String

User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#dataproc_service_account GoogleDataFusionInstance#dataproc_service_account}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#deletion_policy GoogleDataFusionInstance#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#description GoogleDataFusionInstance#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Display name for an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#display_name GoogleDataFusionInstance#display_name}

---

##### `enableRbac`<sup>Optional</sup> <a name="enableRbac" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.enableRbac"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Option to enable granular role-based access control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#enable_rbac GoogleDataFusionInstance#enable_rbac}

---

##### `enableStackdriverLogging`<sup>Optional</sup> <a name="enableStackdriverLogging" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.enableStackdriverLogging"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Option to enable Stackdriver Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#enable_stackdriver_logging GoogleDataFusionInstance#enable_stackdriver_logging}

---

##### `enableStackdriverMonitoring`<sup>Optional</sup> <a name="enableStackdriverMonitoring" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.enableStackdriverMonitoring"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Option to enable Stackdriver Monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#enable_stackdriver_monitoring GoogleDataFusionInstance#enable_stackdriver_monitoring}

---

##### `eventPublishConfig`<sup>Optional</sup> <a name="eventPublishConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.eventPublishConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a>

event_publish_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#event_publish_config GoogleDataFusionInstance#event_publish_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#id GoogleDataFusionInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The resource labels for instance to use to annotate any related underlying resources, such as Compute Engine VMs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#labels GoogleDataFusionInstance#labels}

---

##### `maintenancePolicy`<sup>Optional</sup> <a name="maintenancePolicy" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.maintenancePolicy"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicy">GoogleDataFusionInstanceMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#maintenance_policy GoogleDataFusionInstance#maintenance_policy}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.networkConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#network_config GoogleDataFusionInstance#network_config}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.options"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of additional options used to configure the behavior of Data Fusion instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#options GoogleDataFusionInstance#options}

---

##### `patchRevision`<sup>Optional</sup> <a name="patchRevision" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.patchRevision"></a>

- *Type:* java.lang.String

Current patch revision of the Data Fusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#patch_revision GoogleDataFusionInstance#patch_revision}

---

##### `privateInstance`<sup>Optional</sup> <a name="privateInstance" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.privateInstance"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the Data Fusion instance should be private.

If set to
true, all Data Fusion nodes will have private IP addresses and will not be
able to access the public internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#private_instance GoogleDataFusionInstance#private_instance}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#project GoogleDataFusionInstance#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of the Data Fusion instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#region GoogleDataFusionInstance#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags.
Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/{tag_value_id}.
The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#tags GoogleDataFusionInstance#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts">GoogleDataFusionInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#timeouts GoogleDataFusionInstance#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Current version of the Data Fusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#version GoogleDataFusionInstance#version}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#zone GoogleDataFusionInstance#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putAccelerators">putAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putCryptoKeyConfig">putCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putEventPublishConfig">putEventPublishConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putMaintenancePolicy">putMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetAccelerators">resetAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetCryptoKeyConfig">resetCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDataprocServiceAccount">resetDataprocServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEnableRbac">resetEnableRbac</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEnableStackdriverLogging">resetEnableStackdriverLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEnableStackdriverMonitoring">resetEnableStackdriverMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEventPublishConfig">resetEventPublishConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetMaintenancePolicy">resetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetPatchRevision">resetPatchRevision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetPrivateInstance">resetPrivateInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccelerators` <a name="putAccelerators" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putAccelerators"></a>

```java
public void putAccelerators(IResolvable|java.util.List<GoogleDataFusionInstanceAccelerators> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putAccelerators.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a>>

---

##### `putCryptoKeyConfig` <a name="putCryptoKeyConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putCryptoKeyConfig"></a>

```java
public void putCryptoKeyConfig(GoogleDataFusionInstanceCryptoKeyConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putCryptoKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a>

---

##### `putEventPublishConfig` <a name="putEventPublishConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putEventPublishConfig"></a>

```java
public void putEventPublishConfig(GoogleDataFusionInstanceEventPublishConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putEventPublishConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a>

---

##### `putMaintenancePolicy` <a name="putMaintenancePolicy" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putMaintenancePolicy"></a>

```java
public void putMaintenancePolicy(GoogleDataFusionInstanceMaintenancePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicy">GoogleDataFusionInstanceMaintenancePolicy</a>

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putNetworkConfig"></a>

```java
public void putNetworkConfig(GoogleDataFusionInstanceNetworkConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putTimeouts"></a>

```java
public void putTimeouts(GoogleDataFusionInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts">GoogleDataFusionInstanceTimeouts</a>

---

##### `resetAccelerators` <a name="resetAccelerators" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetAccelerators"></a>

```java
public void resetAccelerators()
```

##### `resetCryptoKeyConfig` <a name="resetCryptoKeyConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetCryptoKeyConfig"></a>

```java
public void resetCryptoKeyConfig()
```

##### `resetDataprocServiceAccount` <a name="resetDataprocServiceAccount" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDataprocServiceAccount"></a>

```java
public void resetDataprocServiceAccount()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEnableRbac` <a name="resetEnableRbac" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEnableRbac"></a>

```java
public void resetEnableRbac()
```

##### `resetEnableStackdriverLogging` <a name="resetEnableStackdriverLogging" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEnableStackdriverLogging"></a>

```java
public void resetEnableStackdriverLogging()
```

##### `resetEnableStackdriverMonitoring` <a name="resetEnableStackdriverMonitoring" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEnableStackdriverMonitoring"></a>

```java
public void resetEnableStackdriverMonitoring()
```

##### `resetEventPublishConfig` <a name="resetEventPublishConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEventPublishConfig"></a>

```java
public void resetEventPublishConfig()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMaintenancePolicy` <a name="resetMaintenancePolicy" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetMaintenancePolicy"></a>

```java
public void resetMaintenancePolicy()
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetNetworkConfig"></a>

```java
public void resetNetworkConfig()
```

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetPatchRevision` <a name="resetPatchRevision" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetPatchRevision"></a>

```java
public void resetPatchRevision()
```

##### `resetPrivateInstance` <a name="resetPrivateInstance" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetPrivateInstance"></a>

```java
public void resetPrivateInstance()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetVersion"></a>

```java
public void resetVersion()
```

##### `resetZone` <a name="resetZone" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataFusionInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstance;

GoogleDataFusionInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstance;

GoogleDataFusionInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstance;

GoogleDataFusionInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstance;

GoogleDataFusionInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDataFusionInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleDataFusionInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDataFusionInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDataFusionInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataFusionInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.accelerators">accelerators</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList">GoogleDataFusionInstanceAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.apiEndpoint">apiEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.cryptoKeyConfig">cryptoKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference">GoogleDataFusionInstanceCryptoKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.eventPublishConfig">eventPublishConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference">GoogleDataFusionInstanceEventPublishConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.gcsBucket">gcsBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.maintenanceEvents">maintenanceEvents</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList">GoogleDataFusionInstanceMaintenanceEventsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference">GoogleDataFusionInstanceMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference">GoogleDataFusionInstanceNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.p4ServiceAccount">p4ServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.serviceEndpoint">serviceEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.tenantProjectId">tenantProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference">GoogleDataFusionInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.acceleratorsInput">acceleratorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.cryptoKeyConfigInput">cryptoKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.dataprocServiceAccountInput">dataprocServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableRbacInput">enableRbacInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverLoggingInput">enableStackdriverLoggingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverMonitoringInput">enableStackdriverMonitoringInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.eventPublishConfigInput">eventPublishConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.maintenancePolicyInput">maintenancePolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicy">GoogleDataFusionInstanceMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.optionsInput">optionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.patchRevisionInput">patchRevisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.privateInstanceInput">privateInstanceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts">GoogleDataFusionInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.dataprocServiceAccount">dataprocServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableRbac">enableRbac</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverLogging">enableStackdriverLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverMonitoring">enableStackdriverMonitoring</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.patchRevision">patchRevision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.privateInstance">privateInstance</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accelerators`<sup>Required</sup> <a name="accelerators" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.accelerators"></a>

```java
public GoogleDataFusionInstanceAcceleratorsList getAccelerators();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList">GoogleDataFusionInstanceAcceleratorsList</a>

---

##### `apiEndpoint`<sup>Required</sup> <a name="apiEndpoint" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.apiEndpoint"></a>

```java
public java.lang.String getApiEndpoint();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `cryptoKeyConfig`<sup>Required</sup> <a name="cryptoKeyConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.cryptoKeyConfig"></a>

```java
public GoogleDataFusionInstanceCryptoKeyConfigOutputReference getCryptoKeyConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference">GoogleDataFusionInstanceCryptoKeyConfigOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `eventPublishConfig`<sup>Required</sup> <a name="eventPublishConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.eventPublishConfig"></a>

```java
public GoogleDataFusionInstanceEventPublishConfigOutputReference getEventPublishConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference">GoogleDataFusionInstanceEventPublishConfigOutputReference</a>

---

##### `gcsBucket`<sup>Required</sup> <a name="gcsBucket" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.gcsBucket"></a>

```java
public java.lang.String getGcsBucket();
```

- *Type:* java.lang.String

---

##### `maintenanceEvents`<sup>Required</sup> <a name="maintenanceEvents" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.maintenanceEvents"></a>

```java
public GoogleDataFusionInstanceMaintenanceEventsList getMaintenanceEvents();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList">GoogleDataFusionInstanceMaintenanceEventsList</a>

---

##### `maintenancePolicy`<sup>Required</sup> <a name="maintenancePolicy" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.maintenancePolicy"></a>

```java
public GoogleDataFusionInstanceMaintenancePolicyOutputReference getMaintenancePolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference">GoogleDataFusionInstanceMaintenancePolicyOutputReference</a>

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.networkConfig"></a>

```java
public GoogleDataFusionInstanceNetworkConfigOutputReference getNetworkConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference">GoogleDataFusionInstanceNetworkConfigOutputReference</a>

---

##### `p4ServiceAccount`<sup>Required</sup> <a name="p4ServiceAccount" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.p4ServiceAccount"></a>

```java
public java.lang.String getP4ServiceAccount();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `serviceEndpoint`<sup>Required</sup> <a name="serviceEndpoint" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.serviceEndpoint"></a>

```java
public java.lang.String getServiceEndpoint();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `tenantProjectId`<sup>Required</sup> <a name="tenantProjectId" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.tenantProjectId"></a>

```java
public java.lang.String getTenantProjectId();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.timeouts"></a>

```java
public GoogleDataFusionInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference">GoogleDataFusionInstanceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `acceleratorsInput`<sup>Optional</sup> <a name="acceleratorsInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.acceleratorsInput"></a>

```java
public IResolvable|java.util.List<GoogleDataFusionInstanceAccelerators> getAcceleratorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a>>

---

##### `cryptoKeyConfigInput`<sup>Optional</sup> <a name="cryptoKeyConfigInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.cryptoKeyConfigInput"></a>

```java
public GoogleDataFusionInstanceCryptoKeyConfig getCryptoKeyConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a>

---

##### `dataprocServiceAccountInput`<sup>Optional</sup> <a name="dataprocServiceAccountInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.dataprocServiceAccountInput"></a>

```java
public java.lang.String getDataprocServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enableRbacInput`<sup>Optional</sup> <a name="enableRbacInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableRbacInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableRbacInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableStackdriverLoggingInput`<sup>Optional</sup> <a name="enableStackdriverLoggingInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverLoggingInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableStackdriverLoggingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableStackdriverMonitoringInput`<sup>Optional</sup> <a name="enableStackdriverMonitoringInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverMonitoringInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableStackdriverMonitoringInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventPublishConfigInput`<sup>Optional</sup> <a name="eventPublishConfigInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.eventPublishConfigInput"></a>

```java
public GoogleDataFusionInstanceEventPublishConfig getEventPublishConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `maintenancePolicyInput`<sup>Optional</sup> <a name="maintenancePolicyInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.maintenancePolicyInput"></a>

```java
public GoogleDataFusionInstanceMaintenancePolicy getMaintenancePolicyInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicy">GoogleDataFusionInstanceMaintenancePolicy</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.networkConfigInput"></a>

```java
public GoogleDataFusionInstanceNetworkConfig getNetworkConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a>

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.optionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `patchRevisionInput`<sup>Optional</sup> <a name="patchRevisionInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.patchRevisionInput"></a>

```java
public java.lang.String getPatchRevisionInput();
```

- *Type:* java.lang.String

---

##### `privateInstanceInput`<sup>Optional</sup> <a name="privateInstanceInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.privateInstanceInput"></a>

```java
public java.lang.Boolean|IResolvable getPrivateInstanceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.timeoutsInput"></a>

```java
public IResolvable|GoogleDataFusionInstanceTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts">GoogleDataFusionInstanceTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `dataprocServiceAccount`<sup>Required</sup> <a name="dataprocServiceAccount" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.dataprocServiceAccount"></a>

```java
public java.lang.String getDataprocServiceAccount();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enableRbac`<sup>Required</sup> <a name="enableRbac" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableRbac"></a>

```java
public java.lang.Boolean|IResolvable getEnableRbac();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableStackdriverLogging`<sup>Required</sup> <a name="enableStackdriverLogging" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverLogging"></a>

```java
public java.lang.Boolean|IResolvable getEnableStackdriverLogging();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableStackdriverMonitoring`<sup>Required</sup> <a name="enableStackdriverMonitoring" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverMonitoring"></a>

```java
public java.lang.Boolean|IResolvable getEnableStackdriverMonitoring();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `patchRevision`<sup>Required</sup> <a name="patchRevision" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.patchRevision"></a>

```java
public java.lang.String getPatchRevision();
```

- *Type:* java.lang.String

---

##### `privateInstance`<sup>Required</sup> <a name="privateInstance" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.privateInstance"></a>

```java
public java.lang.Boolean|IResolvable getPrivateInstance();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataFusionInstanceAccelerators <a name="GoogleDataFusionInstanceAccelerators" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstanceAccelerators;

GoogleDataFusionInstanceAccelerators.builder()
    .acceleratorType(java.lang.String)
    .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | The type of an accelator for a CDF instance. Possible values: ["CDC", "HEALTHCARE", "CCAI_INSIGHTS"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators.property.state">state</a></code> | <code>java.lang.String</code> | The type of an accelator for a CDF instance. Possible values: ["ENABLED", "DISABLED"]. |

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

The type of an accelator for a CDF instance. Possible values: ["CDC", "HEALTHCARE", "CCAI_INSIGHTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#accelerator_type GoogleDataFusionInstance#accelerator_type}

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

The type of an accelator for a CDF instance. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#state GoogleDataFusionInstance#state}

---

### GoogleDataFusionInstanceConfig <a name="GoogleDataFusionInstanceConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstanceConfig;

GoogleDataFusionInstanceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .type(java.lang.String)
//  .accelerators(IResolvable|java.util.List<GoogleDataFusionInstanceAccelerators>)
//  .cryptoKeyConfig(GoogleDataFusionInstanceCryptoKeyConfig)
//  .dataprocServiceAccount(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .enableRbac(java.lang.Boolean|IResolvable)
//  .enableStackdriverLogging(java.lang.Boolean|IResolvable)
//  .enableStackdriverMonitoring(java.lang.Boolean|IResolvable)
//  .eventPublishConfig(GoogleDataFusionInstanceEventPublishConfig)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .maintenancePolicy(GoogleDataFusionInstanceMaintenancePolicy)
//  .networkConfig(GoogleDataFusionInstanceNetworkConfig)
//  .options(java.util.Map<java.lang.String, java.lang.String>)
//  .patchRevision(java.lang.String)
//  .privateInstance(java.lang.Boolean|IResolvable)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(GoogleDataFusionInstanceTimeouts)
//  .version(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | The ID of the instance or a fully qualified identifier for the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.type">type</a></code> | <code>java.lang.String</code> | Represents the type of Data Fusion instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.accelerators">accelerators</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a>></code> | accelerators block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.cryptoKeyConfig">cryptoKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a></code> | crypto_key_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.dataprocServiceAccount">dataprocServiceAccount</a></code> | <code>java.lang.String</code> | User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name for an instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.enableRbac">enableRbac</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Option to enable granular role-based access control. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.enableStackdriverLogging">enableStackdriverLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Option to enable Stackdriver Logging. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.enableStackdriverMonitoring">enableStackdriverMonitoring</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Option to enable Stackdriver Monitoring. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.eventPublishConfig">eventPublishConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a></code> | event_publish_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#id GoogleDataFusionInstance#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The resource labels for instance to use to annotate any related underlying resources, such as Compute Engine VMs. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicy">GoogleDataFusionInstanceMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of additional options used to configure the behavior of Data Fusion instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.patchRevision">patchRevision</a></code> | <code>java.lang.String</code> | Current patch revision of the Data Fusion. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.privateInstance">privateInstance</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the Data Fusion instance should be private. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#project GoogleDataFusionInstance#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of the Data Fusion instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of resource manager tags. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts">GoogleDataFusionInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.version">version</a></code> | <code>java.lang.String</code> | Current version of the Data Fusion. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The ID of the instance or a fully qualified identifier for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#name GoogleDataFusionInstance#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Represents the type of Data Fusion instance.

Each type is configured with
the default settings for processing and memory.

* BASIC: Basic Data Fusion instance. In Basic type, the user will be able to create data pipelines
  using point and click UI. However, there are certain limitations, such as fewer number
  of concurrent pipelines, no support for streaming pipelines, etc.
* ENTERPRISE: Enterprise Data Fusion instance. In Enterprise type, the user will have more features
  available, such as support for streaming pipelines, higher number of concurrent pipelines, etc.
* DEVELOPER: Developer Data Fusion instance. In Developer type, the user will have all features available but
  with restrictive capabilities. This is to help enterprises design and develop their data ingestion and integration
  pipelines at low cost. Possible values: ["BASIC", "ENTERPRISE", "DEVELOPER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#type GoogleDataFusionInstance#type}

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.accelerators"></a>

```java
public IResolvable|java.util.List<GoogleDataFusionInstanceAccelerators> getAccelerators();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a>>

accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#accelerators GoogleDataFusionInstance#accelerators}

---

##### `cryptoKeyConfig`<sup>Optional</sup> <a name="cryptoKeyConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.cryptoKeyConfig"></a>

```java
public GoogleDataFusionInstanceCryptoKeyConfig getCryptoKeyConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a>

crypto_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#crypto_key_config GoogleDataFusionInstance#crypto_key_config}

---

##### `dataprocServiceAccount`<sup>Optional</sup> <a name="dataprocServiceAccount" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.dataprocServiceAccount"></a>

```java
public java.lang.String getDataprocServiceAccount();
```

- *Type:* java.lang.String

User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#dataproc_service_account GoogleDataFusionInstance#dataproc_service_account}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#deletion_policy GoogleDataFusionInstance#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#description GoogleDataFusionInstance#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display name for an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#display_name GoogleDataFusionInstance#display_name}

---

##### `enableRbac`<sup>Optional</sup> <a name="enableRbac" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.enableRbac"></a>

```java
public java.lang.Boolean|IResolvable getEnableRbac();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Option to enable granular role-based access control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#enable_rbac GoogleDataFusionInstance#enable_rbac}

---

##### `enableStackdriverLogging`<sup>Optional</sup> <a name="enableStackdriverLogging" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.enableStackdriverLogging"></a>

```java
public java.lang.Boolean|IResolvable getEnableStackdriverLogging();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Option to enable Stackdriver Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#enable_stackdriver_logging GoogleDataFusionInstance#enable_stackdriver_logging}

---

##### `enableStackdriverMonitoring`<sup>Optional</sup> <a name="enableStackdriverMonitoring" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.enableStackdriverMonitoring"></a>

```java
public java.lang.Boolean|IResolvable getEnableStackdriverMonitoring();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Option to enable Stackdriver Monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#enable_stackdriver_monitoring GoogleDataFusionInstance#enable_stackdriver_monitoring}

---

##### `eventPublishConfig`<sup>Optional</sup> <a name="eventPublishConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.eventPublishConfig"></a>

```java
public GoogleDataFusionInstanceEventPublishConfig getEventPublishConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a>

event_publish_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#event_publish_config GoogleDataFusionInstance#event_publish_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#id GoogleDataFusionInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The resource labels for instance to use to annotate any related underlying resources, such as Compute Engine VMs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#labels GoogleDataFusionInstance#labels}

---

##### `maintenancePolicy`<sup>Optional</sup> <a name="maintenancePolicy" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.maintenancePolicy"></a>

```java
public GoogleDataFusionInstanceMaintenancePolicy getMaintenancePolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicy">GoogleDataFusionInstanceMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#maintenance_policy GoogleDataFusionInstance#maintenance_policy}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.networkConfig"></a>

```java
public GoogleDataFusionInstanceNetworkConfig getNetworkConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#network_config GoogleDataFusionInstance#network_config}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of additional options used to configure the behavior of Data Fusion instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#options GoogleDataFusionInstance#options}

---

##### `patchRevision`<sup>Optional</sup> <a name="patchRevision" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.patchRevision"></a>

```java
public java.lang.String getPatchRevision();
```

- *Type:* java.lang.String

Current patch revision of the Data Fusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#patch_revision GoogleDataFusionInstance#patch_revision}

---

##### `privateInstance`<sup>Optional</sup> <a name="privateInstance" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.privateInstance"></a>

```java
public java.lang.Boolean|IResolvable getPrivateInstance();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the Data Fusion instance should be private.

If set to
true, all Data Fusion nodes will have private IP addresses and will not be
able to access the public internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#private_instance GoogleDataFusionInstance#private_instance}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#project GoogleDataFusionInstance#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the Data Fusion instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#region GoogleDataFusionInstance#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags.
Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/{tag_value_id}.
The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#tags GoogleDataFusionInstance#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.timeouts"></a>

```java
public GoogleDataFusionInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts">GoogleDataFusionInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#timeouts GoogleDataFusionInstance#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Current version of the Data Fusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#version GoogleDataFusionInstance#version}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#zone GoogleDataFusionInstance#zone}

---

### GoogleDataFusionInstanceCryptoKeyConfig <a name="GoogleDataFusionInstanceCryptoKeyConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstanceCryptoKeyConfig;

GoogleDataFusionInstanceCryptoKeyConfig.builder()
    .keyReference(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig.property.keyReference">keyReference</a></code> | <code>java.lang.String</code> | The name of the key which is used to encrypt/decrypt customer data. |

---

##### `keyReference`<sup>Required</sup> <a name="keyReference" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig.property.keyReference"></a>

```java
public java.lang.String getKeyReference();
```

- *Type:* java.lang.String

The name of the key which is used to encrypt/decrypt customer data.

For key in Cloud KMS, the key should be in the format of projects/* /locations/* /keyRings/* /cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#key_reference GoogleDataFusionInstance#key_reference}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDataFusionInstanceEventPublishConfig <a name="GoogleDataFusionInstanceEventPublishConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstanceEventPublishConfig;

GoogleDataFusionInstanceEventPublishConfig.builder()
    .enabled(java.lang.Boolean|IResolvable)
    .topic(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Option to enable Event Publishing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig.property.topic">topic</a></code> | <code>java.lang.String</code> | The resource name of the Pub/Sub topic. Format: projects/{projectId}/topics/{topic_id}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Option to enable Event Publishing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#enabled GoogleDataFusionInstance#enabled}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

The resource name of the Pub/Sub topic. Format: projects/{projectId}/topics/{topic_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#topic GoogleDataFusionInstance#topic}

---

### GoogleDataFusionInstanceMaintenanceEvents <a name="GoogleDataFusionInstanceMaintenanceEvents" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEvents.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstanceMaintenanceEvents;

GoogleDataFusionInstanceMaintenanceEvents.builder()
    .build();
```


### GoogleDataFusionInstanceMaintenancePolicy <a name="GoogleDataFusionInstanceMaintenancePolicy" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstanceMaintenancePolicy;

GoogleDataFusionInstanceMaintenancePolicy.builder()
//  .maintenanceWindow(GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicy.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow</a></code> | maintenance_window block. |

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicy.property.maintenanceWindow"></a>

```java
public GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow getMaintenanceWindow();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#maintenance_window GoogleDataFusionInstance#maintenance_window}

---

### GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow <a name="GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow;

GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow.builder()
    .recurringTimeWindow(GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow.property.recurringTimeWindow">recurringTimeWindow</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow</a></code> | recurring_time_window block. |

---

##### `recurringTimeWindow`<sup>Required</sup> <a name="recurringTimeWindow" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow.property.recurringTimeWindow"></a>

```java
public GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow getRecurringTimeWindow();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow</a>

recurring_time_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#recurring_time_window GoogleDataFusionInstance#recurring_time_window}

---

### GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow <a name="GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow;

GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow.builder()
    .recurrence(java.lang.String)
    .window(GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow.property.recurrence">recurrence</a></code> | <code>java.lang.String</code> | An RRULE with format RFC-5545 for how this window reccurs. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow.property.window">window</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow</a></code> | window block. |

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow.property.recurrence"></a>

```java
public java.lang.String getRecurrence();
```

- *Type:* java.lang.String

An RRULE with format RFC-5545 for how this window reccurs.

They go on for the span of time between the start and end time. The only supported FREQ value is "WEEKLY". To have something repeat every weekday, use: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#recurrence GoogleDataFusionInstance#recurrence}

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow.property.window"></a>

```java
public GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow getWindow();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow</a>

window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#window GoogleDataFusionInstance#window}

---

### GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow <a name="GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow;

GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow.builder()
    .endTime(java.lang.String)
    .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow.property.endTime">endTime</a></code> | <code>java.lang.String</code> | The end time of the time window provided in RFC 3339 format. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow.property.startTime">startTime</a></code> | <code>java.lang.String</code> | The start time of the time window provided in RFC 3339 format. |

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

The end time of the time window provided in RFC 3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#end_time GoogleDataFusionInstance#end_time}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

The start time of the time window provided in RFC 3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#start_time GoogleDataFusionInstance#start_time}

---

### GoogleDataFusionInstanceNetworkConfig <a name="GoogleDataFusionInstanceNetworkConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstanceNetworkConfig;

GoogleDataFusionInstanceNetworkConfig.builder()
//  .connectionType(java.lang.String)
//  .ipAllocation(java.lang.String)
//  .network(java.lang.String)
//  .privateServiceConnectConfig(GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.ipAllocation">ipAllocation</a></code> | <code>java.lang.String</code> | The IP range in CIDR notation to use for the managed Data Fusion instance nodes. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.network">network</a></code> | <code>java.lang.String</code> | Name of the network in the project with which the tenant project will be peered for executing pipelines. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.privateServiceConnectConfig">privateServiceConnectConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a></code> | private_service_connect_config block. |

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

Optional.

Type of connection for establishing private IP connectivity between the Data Fusion customer project VPC and
the corresponding tenant project from a predefined list of available connection modes.
If this field is unspecified for a private instance, VPC peering is used. Possible values: ["VPC_PEERING", "PRIVATE_SERVICE_CONNECT_INTERFACES"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#connection_type GoogleDataFusionInstance#connection_type}

---

##### `ipAllocation`<sup>Optional</sup> <a name="ipAllocation" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.ipAllocation"></a>

```java
public java.lang.String getIpAllocation();
```

- *Type:* java.lang.String

The IP range in CIDR notation to use for the managed Data Fusion instance nodes.

This range must not overlap with any other ranges used in the Data Fusion instance network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#ip_allocation GoogleDataFusionInstance#ip_allocation}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

Name of the network in the project with which the tenant project will be peered for executing pipelines.

In case of shared VPC where the network resides in another host
project the network should specified in the form of projects/{host-project-id}/global/networks/{network}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#network GoogleDataFusionInstance#network}

---

##### `privateServiceConnectConfig`<sup>Optional</sup> <a name="privateServiceConnectConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.privateServiceConnectConfig"></a>

```java
public GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig getPrivateServiceConnectConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

private_service_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#private_service_connect_config GoogleDataFusionInstance#private_service_connect_config}

---

### GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig <a name="GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig;

GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig.builder()
//  .networkAttachment(java.lang.String)
//  .unreachableCidrBlock(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.networkAttachment">networkAttachment</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.unreachableCidrBlock">unreachableCidrBlock</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `networkAttachment`<sup>Optional</sup> <a name="networkAttachment" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.networkAttachment"></a>

```java
public java.lang.String getNetworkAttachment();
```

- *Type:* java.lang.String

Optional.

The reference to the network attachment used to establish private connectivity.
It will be of the form projects/{project-id}/regions/{region}/networkAttachments/{network-attachment-id}.
This is required only when using connection type PRIVATE_SERVICE_CONNECT_INTERFACES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#network_attachment GoogleDataFusionInstance#network_attachment}

---

##### `unreachableCidrBlock`<sup>Optional</sup> <a name="unreachableCidrBlock" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.unreachableCidrBlock"></a>

```java
public java.lang.String getUnreachableCidrBlock();
```

- *Type:* java.lang.String

Optional.

Input only. The CIDR block to which the CDF instance can't route traffic to in the consumer project VPC.
The size of this block should be at least /25. This range should not overlap with the primary address range of any subnetwork used by the network attachment.
This range can be used for other purposes in the consumer VPC as long as there is no requirement for CDF to reach destinations using these addresses.
If this value is not provided, the server chooses a non RFC 1918 address range. The format of this field is governed by RFC 4632.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#unreachable_cidr_block GoogleDataFusionInstance#unreachable_cidr_block}

---

### GoogleDataFusionInstanceTimeouts <a name="GoogleDataFusionInstanceTimeouts" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstanceTimeouts;

GoogleDataFusionInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#create GoogleDataFusionInstance#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#delete GoogleDataFusionInstance#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#update GoogleDataFusionInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#create GoogleDataFusionInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#delete GoogleDataFusionInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_fusion_instance#update GoogleDataFusionInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataFusionInstanceAcceleratorsList <a name="GoogleDataFusionInstanceAcceleratorsList" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstanceAcceleratorsList;

new GoogleDataFusionInstanceAcceleratorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.get"></a>

```java
public GoogleDataFusionInstanceAcceleratorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDataFusionInstanceAccelerators> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a>>

---


### GoogleDataFusionInstanceAcceleratorsOutputReference <a name="GoogleDataFusionInstanceAcceleratorsOutputReference" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstanceAcceleratorsOutputReference;

new GoogleDataFusionInstanceAcceleratorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.acceleratorTypeInput"></a>

```java
public java.lang.String getAcceleratorTypeInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDataFusionInstanceAccelerators getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a>

---


### GoogleDataFusionInstanceCryptoKeyConfigOutputReference <a name="GoogleDataFusionInstanceCryptoKeyConfigOutputReference" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference;

new GoogleDataFusionInstanceCryptoKeyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.keyReferenceInput">keyReferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.keyReference">keyReference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyReferenceInput`<sup>Optional</sup> <a name="keyReferenceInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.keyReferenceInput"></a>

```java
public java.lang.String getKeyReferenceInput();
```

- *Type:* java.lang.String

---

##### `keyReference`<sup>Required</sup> <a name="keyReference" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.keyReference"></a>

```java
public java.lang.String getKeyReference();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataFusionInstanceCryptoKeyConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a>

---


### GoogleDataFusionInstanceEventPublishConfigOutputReference <a name="GoogleDataFusionInstanceEventPublishConfigOutputReference" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstanceEventPublishConfigOutputReference;

new GoogleDataFusionInstanceEventPublishConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.topicInput">topicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.topic">topic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.topicInput"></a>

```java
public java.lang.String getTopicInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataFusionInstanceEventPublishConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a>

---


### GoogleDataFusionInstanceMaintenanceEventsList <a name="GoogleDataFusionInstanceMaintenanceEventsList" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstanceMaintenanceEventsList;

new GoogleDataFusionInstanceMaintenanceEventsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.get"></a>

```java
public GoogleDataFusionInstanceMaintenanceEventsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDataFusionInstanceMaintenanceEventsOutputReference <a name="GoogleDataFusionInstanceMaintenanceEventsOutputReference" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstanceMaintenanceEventsOutputReference;

new GoogleDataFusionInstanceMaintenanceEventsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEvents">GoogleDataFusionInstanceMaintenanceEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.property.internalValue"></a>

```java
public GoogleDataFusionInstanceMaintenanceEvents getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEvents">GoogleDataFusionInstanceMaintenanceEvents</a>

---


### GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference <a name="GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference;

new GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.putRecurringTimeWindow">putRecurringTimeWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecurringTimeWindow` <a name="putRecurringTimeWindow" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.putRecurringTimeWindow"></a>

```java
public void putRecurringTimeWindow(GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.putRecurringTimeWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.property.recurringTimeWindow">recurringTimeWindow</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.property.recurringTimeWindowInput">recurringTimeWindowInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `recurringTimeWindow`<sup>Required</sup> <a name="recurringTimeWindow" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.property.recurringTimeWindow"></a>

```java
public GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference getRecurringTimeWindow();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference</a>

---

##### `recurringTimeWindowInput`<sup>Optional</sup> <a name="recurringTimeWindowInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.property.recurringTimeWindowInput"></a>

```java
public GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow getRecurringTimeWindowInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow</a>

---


### GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference <a name="GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference;

new GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.putWindow">putWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWindow` <a name="putWindow" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.putWindow"></a>

```java
public void putWindow(GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.putWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.window">window</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.recurrenceInput">recurrenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.windowInput">windowInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.recurrence">recurrence</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.window"></a>

```java
public GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference getWindow();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference</a>

---

##### `recurrenceInput`<sup>Optional</sup> <a name="recurrenceInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.recurrenceInput"></a>

```java
public java.lang.String getRecurrenceInput();
```

- *Type:* java.lang.String

---

##### `windowInput`<sup>Optional</sup> <a name="windowInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.windowInput"></a>

```java
public GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow getWindowInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow</a>

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.recurrence"></a>

```java
public java.lang.String getRecurrence();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.internalValue"></a>

```java
public GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow</a>

---


### GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference <a name="GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference;

new GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.internalValue"></a>

```java
public GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow</a>

---


### GoogleDataFusionInstanceMaintenancePolicyOutputReference <a name="GoogleDataFusionInstanceMaintenancePolicyOutputReference" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstanceMaintenancePolicyOutputReference;

new GoogleDataFusionInstanceMaintenancePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.putMaintenanceWindow"></a>

```java
public void putMaintenanceWindow(GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow</a>

---

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicy">GoogleDataFusionInstanceMaintenancePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.property.maintenanceWindow"></a>

```java
public GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference getMaintenanceWindow();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference</a>

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.property.maintenanceWindowInput"></a>

```java
public GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow getMaintenanceWindowInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.property.internalValue"></a>

```java
public GoogleDataFusionInstanceMaintenancePolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicy">GoogleDataFusionInstanceMaintenancePolicy</a>

---


### GoogleDataFusionInstanceNetworkConfigOutputReference <a name="GoogleDataFusionInstanceNetworkConfigOutputReference" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstanceNetworkConfigOutputReference;

new GoogleDataFusionInstanceNetworkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.putPrivateServiceConnectConfig">putPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetConnectionType">resetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetIpAllocation">resetIpAllocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetPrivateServiceConnectConfig">resetPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrivateServiceConnectConfig` <a name="putPrivateServiceConnectConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.putPrivateServiceConnectConfig"></a>

```java
public void putPrivateServiceConnectConfig(GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.putPrivateServiceConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

---

##### `resetConnectionType` <a name="resetConnectionType" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetConnectionType"></a>

```java
public void resetConnectionType()
```

##### `resetIpAllocation` <a name="resetIpAllocation" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetIpAllocation"></a>

```java
public void resetIpAllocation()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetPrivateServiceConnectConfig` <a name="resetPrivateServiceConnectConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetPrivateServiceConnectConfig"></a>

```java
public void resetPrivateServiceConnectConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfig">privateServiceConnectConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.connectionTypeInput">connectionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.ipAllocationInput">ipAllocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfigInput">privateServiceConnectConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.ipAllocation">ipAllocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `privateServiceConnectConfig`<sup>Required</sup> <a name="privateServiceConnectConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfig"></a>

```java
public GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference getPrivateServiceConnectConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference</a>

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.connectionTypeInput"></a>

```java
public java.lang.String getConnectionTypeInput();
```

- *Type:* java.lang.String

---

##### `ipAllocationInput`<sup>Optional</sup> <a name="ipAllocationInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.ipAllocationInput"></a>

```java
public java.lang.String getIpAllocationInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `privateServiceConnectConfigInput`<sup>Optional</sup> <a name="privateServiceConnectConfigInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfigInput"></a>

```java
public GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig getPrivateServiceConnectConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

---

##### `ipAllocation`<sup>Required</sup> <a name="ipAllocation" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.ipAllocation"></a>

```java
public java.lang.String getIpAllocation();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataFusionInstanceNetworkConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a>

---


### GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference <a name="GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference;

new GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetNetworkAttachment">resetNetworkAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetUnreachableCidrBlock">resetUnreachableCidrBlock</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNetworkAttachment` <a name="resetNetworkAttachment" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetNetworkAttachment"></a>

```java
public void resetNetworkAttachment()
```

##### `resetUnreachableCidrBlock` <a name="resetUnreachableCidrBlock" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetUnreachableCidrBlock"></a>

```java
public void resetUnreachableCidrBlock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.effectiveUnreachableCidrBlock">effectiveUnreachableCidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachmentInput">networkAttachmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlockInput">unreachableCidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachment">networkAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlock">unreachableCidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectiveUnreachableCidrBlock`<sup>Required</sup> <a name="effectiveUnreachableCidrBlock" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.effectiveUnreachableCidrBlock"></a>

```java
public java.lang.String getEffectiveUnreachableCidrBlock();
```

- *Type:* java.lang.String

---

##### `networkAttachmentInput`<sup>Optional</sup> <a name="networkAttachmentInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachmentInput"></a>

```java
public java.lang.String getNetworkAttachmentInput();
```

- *Type:* java.lang.String

---

##### `unreachableCidrBlockInput`<sup>Optional</sup> <a name="unreachableCidrBlockInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlockInput"></a>

```java
public java.lang.String getUnreachableCidrBlockInput();
```

- *Type:* java.lang.String

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachment"></a>

```java
public java.lang.String getNetworkAttachment();
```

- *Type:* java.lang.String

---

##### `unreachableCidrBlock`<sup>Required</sup> <a name="unreachableCidrBlock" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlock"></a>

```java
public java.lang.String getUnreachableCidrBlock();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

---


### GoogleDataFusionInstanceTimeoutsOutputReference <a name="GoogleDataFusionInstanceTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_fusion_instance.GoogleDataFusionInstanceTimeoutsOutputReference;

new GoogleDataFusionInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts">GoogleDataFusionInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDataFusionInstanceTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts">GoogleDataFusionInstanceTimeouts</a>

---



