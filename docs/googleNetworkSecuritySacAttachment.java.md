# `googleNetworkSecuritySacAttachment` Submodule <a name="`googleNetworkSecuritySacAttachment` Submodule" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecuritySacAttachment <a name="GoogleNetworkSecuritySacAttachment" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment google_network_security_sac_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_sac_attachment.GoogleNetworkSecuritySacAttachment;

GoogleNetworkSecuritySacAttachment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .nccGateway(java.lang.String)
    .sacRealm(java.lang.String)
//  .country(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .symantecOptions(GoogleNetworkSecuritySacAttachmentSymantecOptions)
//  .timeouts(GoogleNetworkSecuritySacAttachmentTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the SACAttachment resource. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Identifier. Resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.nccGateway">nccGateway</a></code> | <code>java.lang.String</code> | NCC Gateway associated with the attachment. This can be input as an ID or a full resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.sacRealm">sacRealm</a></code> | <code>java.lang.String</code> | SAC Realm which owns the attachment. This can be input as an ID or a full resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.country">country</a></code> | <code>java.lang.String</code> | Case-insensitive ISO-3166 alpha-2 country code used for localization. Only valid for Symantec attachments. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#id GoogleNetworkSecuritySacAttachment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#project GoogleNetworkSecuritySacAttachment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.symantecOptions">symantecOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a></code> | symantec_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Case-sensitive tzinfo identifier used for localization. Only valid for Symantec attachments. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the SACAttachment resource. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#location GoogleNetworkSecuritySacAttachment#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Identifier. Resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#name GoogleNetworkSecuritySacAttachment#name}

---

##### `nccGateway`<sup>Required</sup> <a name="nccGateway" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.nccGateway"></a>

- *Type:* java.lang.String

NCC Gateway associated with the attachment. This can be input as an ID or a full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#ncc_gateway GoogleNetworkSecuritySacAttachment#ncc_gateway}

---

##### `sacRealm`<sup>Required</sup> <a name="sacRealm" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.sacRealm"></a>

- *Type:* java.lang.String

SAC Realm which owns the attachment. This can be input as an ID or a full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#sac_realm GoogleNetworkSecuritySacAttachment#sac_realm}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.country"></a>

- *Type:* java.lang.String

Case-insensitive ISO-3166 alpha-2 country code used for localization. Only valid for Symantec attachments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#country GoogleNetworkSecuritySacAttachment#country}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#id GoogleNetworkSecuritySacAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#labels GoogleNetworkSecuritySacAttachment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#project GoogleNetworkSecuritySacAttachment#project}.

---

##### `symantecOptions`<sup>Optional</sup> <a name="symantecOptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.symantecOptions"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a>

symantec_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#symantec_options GoogleNetworkSecuritySacAttachment#symantec_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#timeouts GoogleNetworkSecuritySacAttachment#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.timeZone"></a>

- *Type:* java.lang.String

Case-sensitive tzinfo identifier used for localization. Only valid for Symantec attachments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#time_zone GoogleNetworkSecuritySacAttachment#time_zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putSymantecOptions">putSymantecOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetSymantecOptions">resetSymantecOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSymantecOptions` <a name="putSymantecOptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putSymantecOptions"></a>

```java
public void putSymantecOptions(GoogleNetworkSecuritySacAttachmentSymantecOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putSymantecOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkSecuritySacAttachmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a>

---

##### `resetCountry` <a name="resetCountry" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetCountry"></a>

```java
public void resetCountry()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetProject"></a>

```java
public void resetProject()
```

##### `resetSymantecOptions` <a name="resetSymantecOptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetSymantecOptions"></a>

```java
public void resetSymantecOptions()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetTimeZone"></a>

```java
public void resetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkSecuritySacAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_sac_attachment.GoogleNetworkSecuritySacAttachment;

GoogleNetworkSecuritySacAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_sac_attachment.GoogleNetworkSecuritySacAttachment;

GoogleNetworkSecuritySacAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_sac_attachment.GoogleNetworkSecuritySacAttachment;

GoogleNetworkSecuritySacAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_sac_attachment.GoogleNetworkSecuritySacAttachment;

GoogleNetworkSecuritySacAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkSecuritySacAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleNetworkSecuritySacAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkSecuritySacAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkSecuritySacAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecuritySacAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.symantecOptions">symantecOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference">GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference">GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.countryInput">countryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nccGatewayInput">nccGatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.sacRealmInput">sacRealmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.symantecOptionsInput">symantecOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nccGateway">nccGateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.sacRealm">sacRealm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `symantecOptions`<sup>Required</sup> <a name="symantecOptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.symantecOptions"></a>

```java
public GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference getSymantecOptions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference">GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeouts"></a>

```java
public GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference">GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.countryInput"></a>

```java
public java.lang.String getCountryInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nccGatewayInput`<sup>Optional</sup> <a name="nccGatewayInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nccGatewayInput"></a>

```java
public java.lang.String getNccGatewayInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `sacRealmInput`<sup>Optional</sup> <a name="sacRealmInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.sacRealmInput"></a>

```java
public java.lang.String getSacRealmInput();
```

- *Type:* java.lang.String

---

##### `symantecOptionsInput`<sup>Optional</sup> <a name="symantecOptionsInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.symantecOptionsInput"></a>

```java
public GoogleNetworkSecuritySacAttachmentSymantecOptions getSymantecOptionsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeoutsInput"></a>

```java
public IResolvable|GoogleNetworkSecuritySacAttachmentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nccGateway`<sup>Required</sup> <a name="nccGateway" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nccGateway"></a>

```java
public java.lang.String getNccGateway();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `sacRealm`<sup>Required</sup> <a name="sacRealm" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.sacRealm"></a>

```java
public java.lang.String getSacRealm();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecuritySacAttachmentConfig <a name="GoogleNetworkSecuritySacAttachmentConfig" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_sac_attachment.GoogleNetworkSecuritySacAttachmentConfig;

GoogleNetworkSecuritySacAttachmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .nccGateway(java.lang.String)
    .sacRealm(java.lang.String)
//  .country(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .symantecOptions(GoogleNetworkSecuritySacAttachmentSymantecOptions)
//  .timeouts(GoogleNetworkSecuritySacAttachmentTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the SACAttachment resource. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Identifier. Resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.nccGateway">nccGateway</a></code> | <code>java.lang.String</code> | NCC Gateway associated with the attachment. This can be input as an ID or a full resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.sacRealm">sacRealm</a></code> | <code>java.lang.String</code> | SAC Realm which owns the attachment. This can be input as an ID or a full resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.country">country</a></code> | <code>java.lang.String</code> | Case-insensitive ISO-3166 alpha-2 country code used for localization. Only valid for Symantec attachments. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#id GoogleNetworkSecuritySacAttachment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#project GoogleNetworkSecuritySacAttachment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.symantecOptions">symantecOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a></code> | symantec_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Case-sensitive tzinfo identifier used for localization. Only valid for Symantec attachments. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the SACAttachment resource. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#location GoogleNetworkSecuritySacAttachment#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Identifier. Resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#name GoogleNetworkSecuritySacAttachment#name}

---

##### `nccGateway`<sup>Required</sup> <a name="nccGateway" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.nccGateway"></a>

```java
public java.lang.String getNccGateway();
```

- *Type:* java.lang.String

NCC Gateway associated with the attachment. This can be input as an ID or a full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#ncc_gateway GoogleNetworkSecuritySacAttachment#ncc_gateway}

---

##### `sacRealm`<sup>Required</sup> <a name="sacRealm" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.sacRealm"></a>

```java
public java.lang.String getSacRealm();
```

- *Type:* java.lang.String

SAC Realm which owns the attachment. This can be input as an ID or a full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#sac_realm GoogleNetworkSecuritySacAttachment#sac_realm}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

Case-insensitive ISO-3166 alpha-2 country code used for localization. Only valid for Symantec attachments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#country GoogleNetworkSecuritySacAttachment#country}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#id GoogleNetworkSecuritySacAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#labels GoogleNetworkSecuritySacAttachment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#project GoogleNetworkSecuritySacAttachment#project}.

---

##### `symantecOptions`<sup>Optional</sup> <a name="symantecOptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.symantecOptions"></a>

```java
public GoogleNetworkSecuritySacAttachmentSymantecOptions getSymantecOptions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a>

symantec_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#symantec_options GoogleNetworkSecuritySacAttachment#symantec_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.timeouts"></a>

```java
public GoogleNetworkSecuritySacAttachmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#timeouts GoogleNetworkSecuritySacAttachment#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Case-sensitive tzinfo identifier used for localization. Only valid for Symantec attachments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#time_zone GoogleNetworkSecuritySacAttachment#time_zone}

---

### GoogleNetworkSecuritySacAttachmentSymantecOptions <a name="GoogleNetworkSecuritySacAttachmentSymantecOptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_sac_attachment.GoogleNetworkSecuritySacAttachmentSymantecOptions;

GoogleNetworkSecuritySacAttachmentSymantecOptions.builder()
//  .symantecLocationName(java.lang.String)
//  .symantecSite(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions.property.symantecLocationName">symantecLocationName</a></code> | <code>java.lang.String</code> | Name to be used when creating a location on the customer's behalf in Symantec's Location API. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions.property.symantecSite">symantecSite</a></code> | <code>java.lang.String</code> | Symantec data center identifier that this attachment will connect to. |

---

##### `symantecLocationName`<sup>Optional</sup> <a name="symantecLocationName" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions.property.symantecLocationName"></a>

```java
public java.lang.String getSymantecLocationName();
```

- *Type:* java.lang.String

Name to be used when creating a location on the customer's behalf in Symantec's Location API.

Not to be confused with Google Cloud locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#symantec_location_name GoogleNetworkSecuritySacAttachment#symantec_location_name}

---

##### `symantecSite`<sup>Optional</sup> <a name="symantecSite" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions.property.symantecSite"></a>

```java
public java.lang.String getSymantecSite();
```

- *Type:* java.lang.String

Symantec data center identifier that this attachment will connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#symantec_site GoogleNetworkSecuritySacAttachment#symantec_site}

---

### GoogleNetworkSecuritySacAttachmentTimeouts <a name="GoogleNetworkSecuritySacAttachmentTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_sac_attachment.GoogleNetworkSecuritySacAttachmentTimeouts;

GoogleNetworkSecuritySacAttachmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#create GoogleNetworkSecuritySacAttachment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#delete GoogleNetworkSecuritySacAttachment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#update GoogleNetworkSecuritySacAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#create GoogleNetworkSecuritySacAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#delete GoogleNetworkSecuritySacAttachment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#update GoogleNetworkSecuritySacAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference <a name="GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_sac_attachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference;

new GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resetSymantecLocationName">resetSymantecLocationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resetSymantecSite">resetSymantecSite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSymantecLocationName` <a name="resetSymantecLocationName" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resetSymantecLocationName"></a>

```java
public void resetSymantecLocationName()
```

##### `resetSymantecSite` <a name="resetSymantecSite" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resetSymantecSite"></a>

```java
public void resetSymantecSite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecLocationNameInput">symantecLocationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecSiteInput">symantecSiteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecLocationName">symantecLocationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecSite">symantecSite</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `symantecLocationNameInput`<sup>Optional</sup> <a name="symantecLocationNameInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecLocationNameInput"></a>

```java
public java.lang.String getSymantecLocationNameInput();
```

- *Type:* java.lang.String

---

##### `symantecSiteInput`<sup>Optional</sup> <a name="symantecSiteInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecSiteInput"></a>

```java
public java.lang.String getSymantecSiteInput();
```

- *Type:* java.lang.String

---

##### `symantecLocationName`<sup>Required</sup> <a name="symantecLocationName" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecLocationName"></a>

```java
public java.lang.String getSymantecLocationName();
```

- *Type:* java.lang.String

---

##### `symantecSite`<sup>Required</sup> <a name="symantecSite" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecSite"></a>

```java
public java.lang.String getSymantecSite();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.internalValue"></a>

```java
public GoogleNetworkSecuritySacAttachmentSymantecOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a>

---


### GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference <a name="GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_sac_attachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference;

new GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleNetworkSecuritySacAttachmentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a>

---



