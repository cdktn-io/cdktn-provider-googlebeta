# `googleNetworkConnectivityMulticloudDataTransferConfig` Submodule <a name="`googleNetworkConnectivityMulticloudDataTransferConfig` Submodule" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkConnectivityMulticloudDataTransferConfig <a name="GoogleNetworkConnectivityMulticloudDataTransferConfig" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config google_network_connectivity_multicloud_data_transfer_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_connectivity_multicloud_data_transfer_config.GoogleNetworkConnectivityMulticloudDataTransferConfig;

GoogleNetworkConnectivityMulticloudDataTransferConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .services(IResolvable|java.util.List<GoogleNetworkConnectivityMulticloudDataTransferConfigServices>)
//  .timeouts(GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the multicloud data transfer config. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the MulticloudDataTransferConfig resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#id GoogleNetworkConnectivityMulticloudDataTransferConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#project GoogleNetworkConnectivityMulticloudDataTransferConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.services">services</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices">GoogleNetworkConnectivityMulticloudDataTransferConfigServices</a>></code> | services block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts">GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the multicloud data transfer config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#location GoogleNetworkConnectivityMulticloudDataTransferConfig#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the MulticloudDataTransferConfig resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#name GoogleNetworkConnectivityMulticloudDataTransferConfig#name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#deletion_policy GoogleNetworkConnectivityMulticloudDataTransferConfig#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#description GoogleNetworkConnectivityMulticloudDataTransferConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#id GoogleNetworkConnectivityMulticloudDataTransferConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#labels GoogleNetworkConnectivityMulticloudDataTransferConfig#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#project GoogleNetworkConnectivityMulticloudDataTransferConfig#project}.

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.services"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices">GoogleNetworkConnectivityMulticloudDataTransferConfigServices</a>>

services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#services GoogleNetworkConnectivityMulticloudDataTransferConfig#services}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts">GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#timeouts GoogleNetworkConnectivityMulticloudDataTransferConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.putServices">putServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetServices">resetServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putServices` <a name="putServices" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.putServices"></a>

```java
public void putServices(IResolvable|java.util.List<GoogleNetworkConnectivityMulticloudDataTransferConfigServices> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.putServices.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices">GoogleNetworkConnectivityMulticloudDataTransferConfigServices</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts">GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetServices` <a name="resetServices" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetServices"></a>

```java
public void resetServices()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkConnectivityMulticloudDataTransferConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_network_connectivity_multicloud_data_transfer_config.GoogleNetworkConnectivityMulticloudDataTransferConfig;

GoogleNetworkConnectivityMulticloudDataTransferConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_network_connectivity_multicloud_data_transfer_config.GoogleNetworkConnectivityMulticloudDataTransferConfig;

GoogleNetworkConnectivityMulticloudDataTransferConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_network_connectivity_multicloud_data_transfer_config.GoogleNetworkConnectivityMulticloudDataTransferConfig;

GoogleNetworkConnectivityMulticloudDataTransferConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_network_connectivity_multicloud_data_transfer_config.GoogleNetworkConnectivityMulticloudDataTransferConfig;

GoogleNetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleNetworkConnectivityMulticloudDataTransferConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkConnectivityMulticloudDataTransferConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkConnectivityMulticloudDataTransferConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkConnectivityMulticloudDataTransferConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.destinationsActiveCount">destinationsActiveCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.destinationsCount">destinationsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.services">services</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList">GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference">GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.servicesInput">servicesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices">GoogleNetworkConnectivityMulticloudDataTransferConfigServices</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts">GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `destinationsActiveCount`<sup>Required</sup> <a name="destinationsActiveCount" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.destinationsActiveCount"></a>

```java
public java.lang.Number getDestinationsActiveCount();
```

- *Type:* java.lang.Number

---

##### `destinationsCount`<sup>Required</sup> <a name="destinationsCount" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.destinationsCount"></a>

```java
public java.lang.Number getDestinationsCount();
```

- *Type:* java.lang.Number

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.services"></a>

```java
public GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList getServices();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList">GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.timeouts"></a>

```java
public GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference">GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `servicesInput`<sup>Optional</sup> <a name="servicesInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.servicesInput"></a>

```java
public IResolvable|java.util.List<GoogleNetworkConnectivityMulticloudDataTransferConfigServices> getServicesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices">GoogleNetworkConnectivityMulticloudDataTransferConfigServices</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.timeoutsInput"></a>

```java
public IResolvable|GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts">GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkConnectivityMulticloudDataTransferConfigConfig <a name="GoogleNetworkConnectivityMulticloudDataTransferConfigConfig" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_connectivity_multicloud_data_transfer_config.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig;

GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .services(IResolvable|java.util.List<GoogleNetworkConnectivityMulticloudDataTransferConfigServices>)
//  .timeouts(GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the multicloud data transfer config. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the MulticloudDataTransferConfig resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#id GoogleNetworkConnectivityMulticloudDataTransferConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#project GoogleNetworkConnectivityMulticloudDataTransferConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.services">services</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices">GoogleNetworkConnectivityMulticloudDataTransferConfigServices</a>></code> | services block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts">GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the multicloud data transfer config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#location GoogleNetworkConnectivityMulticloudDataTransferConfig#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the MulticloudDataTransferConfig resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#name GoogleNetworkConnectivityMulticloudDataTransferConfig#name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#deletion_policy GoogleNetworkConnectivityMulticloudDataTransferConfig#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#description GoogleNetworkConnectivityMulticloudDataTransferConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#id GoogleNetworkConnectivityMulticloudDataTransferConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#labels GoogleNetworkConnectivityMulticloudDataTransferConfig#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#project GoogleNetworkConnectivityMulticloudDataTransferConfig#project}.

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.services"></a>

```java
public IResolvable|java.util.List<GoogleNetworkConnectivityMulticloudDataTransferConfigServices> getServices();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices">GoogleNetworkConnectivityMulticloudDataTransferConfigServices</a>>

services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#services GoogleNetworkConnectivityMulticloudDataTransferConfig#services}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.timeouts"></a>

```java
public GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts">GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#timeouts GoogleNetworkConnectivityMulticloudDataTransferConfig#timeouts}

---

### GoogleNetworkConnectivityMulticloudDataTransferConfigServices <a name="GoogleNetworkConnectivityMulticloudDataTransferConfigServices" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_connectivity_multicloud_data_transfer_config.GoogleNetworkConnectivityMulticloudDataTransferConfigServices;

GoogleNetworkConnectivityMulticloudDataTransferConfigServices.builder()
    .serviceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | The name of the service, like "big-query" or "cloud-storage". This corresponds to the map key in the API. |

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

The name of the service, like "big-query" or "cloud-storage". This corresponds to the map key in the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#service_name GoogleNetworkConnectivityMulticloudDataTransferConfig#service_name}

---

### GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStates <a name="GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStates" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStates.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_connectivity_multicloud_data_transfer_config.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStates;

GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStates.builder()
    .build();
```


### GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts <a name="GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_connectivity_multicloud_data_transfer_config.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts;

GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#create GoogleNetworkConnectivityMulticloudDataTransferConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#delete GoogleNetworkConnectivityMulticloudDataTransferConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#update GoogleNetworkConnectivityMulticloudDataTransferConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#create GoogleNetworkConnectivityMulticloudDataTransferConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#delete GoogleNetworkConnectivityMulticloudDataTransferConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#update GoogleNetworkConnectivityMulticloudDataTransferConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList <a name="GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_connectivity_multicloud_data_transfer_config.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList;

new GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.get"></a>

```java
public GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices">GoogleNetworkConnectivityMulticloudDataTransferConfigServices</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleNetworkConnectivityMulticloudDataTransferConfigServices> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices">GoogleNetworkConnectivityMulticloudDataTransferConfigServices</a>>

---


### GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference <a name="GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_connectivity_multicloud_data_transfer_config.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference;

new GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.states">states</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList">GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices">GoogleNetworkConnectivityMulticloudDataTransferConfigServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `states`<sup>Required</sup> <a name="states" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.states"></a>

```java
public GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList getStates();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList">GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList</a>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleNetworkConnectivityMulticloudDataTransferConfigServices getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices">GoogleNetworkConnectivityMulticloudDataTransferConfigServices</a>

---


### GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList <a name="GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_connectivity_multicloud_data_transfer_config.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList;

new GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.get"></a>

```java
public GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference <a name="GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_connectivity_multicloud_data_transfer_config.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference;

new GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.effectiveTime">effectiveTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStates">GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectiveTime`<sup>Required</sup> <a name="effectiveTime" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.effectiveTime"></a>

```java
public java.lang.String getEffectiveTime();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.internalValue"></a>

```java
public GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStates getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStates">GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStates</a>

---


### GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference <a name="GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_connectivity_multicloud_data_transfer_config.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference;

new GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts">GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts">GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts</a>

---



