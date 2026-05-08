# `googleIntegrationConnectorsManagedZone` Submodule <a name="`googleIntegrationConnectorsManagedZone` Submodule" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIntegrationConnectorsManagedZone <a name="GoogleIntegrationConnectorsManagedZone" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone google_integration_connectors_managed_zone}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_integration_connectors_managed_zone.GoogleIntegrationConnectorsManagedZone;

GoogleIntegrationConnectorsManagedZone.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dns(java.lang.String)
    .name(java.lang.String)
    .targetProject(java.lang.String)
    .targetVpc(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleIntegrationConnectorsManagedZoneTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.dns">dns</a></code> | <code>java.lang.String</code> | DNS Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of Managed Zone needs to be created. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.targetProject">targetProject</a></code> | <code>java.lang.String</code> | The name of the Target Project. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.targetVpc">targetVpc</a></code> | <code>java.lang.String</code> | The name of the Target Project VPC Network. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#id GoogleIntegrationConnectorsManagedZone#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#project GoogleIntegrationConnectorsManagedZone#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts">GoogleIntegrationConnectorsManagedZoneTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.dns"></a>

- *Type:* java.lang.String

DNS Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#dns GoogleIntegrationConnectorsManagedZone#dns}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of Managed Zone needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#name GoogleIntegrationConnectorsManagedZone#name}

---

##### `targetProject`<sup>Required</sup> <a name="targetProject" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.targetProject"></a>

- *Type:* java.lang.String

The name of the Target Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#target_project GoogleIntegrationConnectorsManagedZone#target_project}

---

##### `targetVpc`<sup>Required</sup> <a name="targetVpc" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.targetVpc"></a>

- *Type:* java.lang.String

The name of the Target Project VPC Network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#target_vpc GoogleIntegrationConnectorsManagedZone#target_vpc}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#description GoogleIntegrationConnectorsManagedZone#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#id GoogleIntegrationConnectorsManagedZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#labels GoogleIntegrationConnectorsManagedZone#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#project GoogleIntegrationConnectorsManagedZone#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts">GoogleIntegrationConnectorsManagedZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#timeouts GoogleIntegrationConnectorsManagedZone#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.putTimeouts"></a>

```java
public void putTimeouts(GoogleIntegrationConnectorsManagedZoneTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts">GoogleIntegrationConnectorsManagedZoneTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIntegrationConnectorsManagedZone resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_integration_connectors_managed_zone.GoogleIntegrationConnectorsManagedZone;

GoogleIntegrationConnectorsManagedZone.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_integration_connectors_managed_zone.GoogleIntegrationConnectorsManagedZone;

GoogleIntegrationConnectorsManagedZone.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_integration_connectors_managed_zone.GoogleIntegrationConnectorsManagedZone;

GoogleIntegrationConnectorsManagedZone.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_integration_connectors_managed_zone.GoogleIntegrationConnectorsManagedZone;

GoogleIntegrationConnectorsManagedZone.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleIntegrationConnectorsManagedZone.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleIntegrationConnectorsManagedZone resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleIntegrationConnectorsManagedZone to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleIntegrationConnectorsManagedZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIntegrationConnectorsManagedZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference">GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.dnsInput">dnsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetProjectInput">targetProjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetVpcInput">targetVpcInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts">GoogleIntegrationConnectorsManagedZoneTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.dns">dns</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetProject">targetProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetVpc">targetVpc</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.timeouts"></a>

```java
public GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference">GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dnsInput`<sup>Optional</sup> <a name="dnsInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.dnsInput"></a>

```java
public java.lang.String getDnsInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `targetProjectInput`<sup>Optional</sup> <a name="targetProjectInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetProjectInput"></a>

```java
public java.lang.String getTargetProjectInput();
```

- *Type:* java.lang.String

---

##### `targetVpcInput`<sup>Optional</sup> <a name="targetVpcInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetVpcInput"></a>

```java
public java.lang.String getTargetVpcInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.timeoutsInput"></a>

```java
public IResolvable|GoogleIntegrationConnectorsManagedZoneTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts">GoogleIntegrationConnectorsManagedZoneTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.dns"></a>

```java
public java.lang.String getDns();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `targetProject`<sup>Required</sup> <a name="targetProject" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetProject"></a>

```java
public java.lang.String getTargetProject();
```

- *Type:* java.lang.String

---

##### `targetVpc`<sup>Required</sup> <a name="targetVpc" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetVpc"></a>

```java
public java.lang.String getTargetVpc();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIntegrationConnectorsManagedZoneConfig <a name="GoogleIntegrationConnectorsManagedZoneConfig" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_integration_connectors_managed_zone.GoogleIntegrationConnectorsManagedZoneConfig;

GoogleIntegrationConnectorsManagedZoneConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dns(java.lang.String)
    .name(java.lang.String)
    .targetProject(java.lang.String)
    .targetVpc(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleIntegrationConnectorsManagedZoneTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.dns">dns</a></code> | <code>java.lang.String</code> | DNS Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of Managed Zone needs to be created. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.targetProject">targetProject</a></code> | <code>java.lang.String</code> | The name of the Target Project. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.targetVpc">targetVpc</a></code> | <code>java.lang.String</code> | The name of the Target Project VPC Network. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#id GoogleIntegrationConnectorsManagedZone#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#project GoogleIntegrationConnectorsManagedZone#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts">GoogleIntegrationConnectorsManagedZoneTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.dns"></a>

```java
public java.lang.String getDns();
```

- *Type:* java.lang.String

DNS Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#dns GoogleIntegrationConnectorsManagedZone#dns}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of Managed Zone needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#name GoogleIntegrationConnectorsManagedZone#name}

---

##### `targetProject`<sup>Required</sup> <a name="targetProject" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.targetProject"></a>

```java
public java.lang.String getTargetProject();
```

- *Type:* java.lang.String

The name of the Target Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#target_project GoogleIntegrationConnectorsManagedZone#target_project}

---

##### `targetVpc`<sup>Required</sup> <a name="targetVpc" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.targetVpc"></a>

```java
public java.lang.String getTargetVpc();
```

- *Type:* java.lang.String

The name of the Target Project VPC Network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#target_vpc GoogleIntegrationConnectorsManagedZone#target_vpc}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#description GoogleIntegrationConnectorsManagedZone#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#id GoogleIntegrationConnectorsManagedZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#labels GoogleIntegrationConnectorsManagedZone#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#project GoogleIntegrationConnectorsManagedZone#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.timeouts"></a>

```java
public GoogleIntegrationConnectorsManagedZoneTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts">GoogleIntegrationConnectorsManagedZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#timeouts GoogleIntegrationConnectorsManagedZone#timeouts}

---

### GoogleIntegrationConnectorsManagedZoneTimeouts <a name="GoogleIntegrationConnectorsManagedZoneTimeouts" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_integration_connectors_managed_zone.GoogleIntegrationConnectorsManagedZoneTimeouts;

GoogleIntegrationConnectorsManagedZoneTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#create GoogleIntegrationConnectorsManagedZone#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#delete GoogleIntegrationConnectorsManagedZone#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#update GoogleIntegrationConnectorsManagedZone#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#create GoogleIntegrationConnectorsManagedZone#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#delete GoogleIntegrationConnectorsManagedZone#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_integration_connectors_managed_zone#update GoogleIntegrationConnectorsManagedZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference <a name="GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_integration_connectors_managed_zone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference;

new GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts">GoogleIntegrationConnectorsManagedZoneTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleIntegrationConnectorsManagedZoneTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts">GoogleIntegrationConnectorsManagedZoneTimeouts</a>

---



