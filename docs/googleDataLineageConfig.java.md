# `googleDataLineageConfig` Submodule <a name="`googleDataLineageConfig` Submodule" id="@cdktn/provider-google-beta.googleDataLineageConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataLineageConfig <a name="GoogleDataLineageConfig" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_lineage_config google_data_lineage_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_config.GoogleDataLineageConfig;

GoogleDataLineageConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ingestion(GoogleDataLineageConfigIngestion)
    .location(java.lang.String)
    .parent(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleDataLineageConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.ingestion">ingestion</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestion">GoogleDataLineageConfigIngestion</a></code> | ingestion block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The region of the data lineage configuration for integration. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | Parent scope for the config. Format: projects/{project-id\|project-number} or folders/{folder-number} or organizations/{organization-number}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_lineage_config#id GoogleDataLineageConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts">GoogleDataLineageConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ingestion`<sup>Required</sup> <a name="ingestion" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.ingestion"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestion">GoogleDataLineageConfigIngestion</a>

ingestion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_lineage_config#ingestion GoogleDataLineageConfig#ingestion}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The region of the data lineage configuration for integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_lineage_config#location GoogleDataLineageConfig#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

Parent scope for the config. Format: projects/{project-id|project-number} or folders/{folder-number} or organizations/{organization-number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_lineage_config#parent GoogleDataLineageConfig#parent}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_lineage_config#deletion_policy GoogleDataLineageConfig#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_lineage_config#id GoogleDataLineageConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts">GoogleDataLineageConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_lineage_config#timeouts GoogleDataLineageConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.putIngestion">putIngestion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIngestion` <a name="putIngestion" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.putIngestion"></a>

```java
public void putIngestion(GoogleDataLineageConfigIngestion value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.putIngestion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestion">GoogleDataLineageConfigIngestion</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleDataLineageConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts">GoogleDataLineageConfigTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataLineageConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_config.GoogleDataLineageConfig;

GoogleDataLineageConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_config.GoogleDataLineageConfig;

GoogleDataLineageConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_config.GoogleDataLineageConfig;

GoogleDataLineageConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_config.GoogleDataLineageConfig;

GoogleDataLineageConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDataLineageConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleDataLineageConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDataLineageConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDataLineageConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_lineage_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataLineageConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.ingestion">ingestion</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference">GoogleDataLineageConfigIngestionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference">GoogleDataLineageConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.ingestionInput">ingestionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestion">GoogleDataLineageConfigIngestion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts">GoogleDataLineageConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `ingestion`<sup>Required</sup> <a name="ingestion" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.ingestion"></a>

```java
public GoogleDataLineageConfigIngestionOutputReference getIngestion();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference">GoogleDataLineageConfigIngestionOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.timeouts"></a>

```java
public GoogleDataLineageConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference">GoogleDataLineageConfigTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ingestionInput`<sup>Optional</sup> <a name="ingestionInput" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.ingestionInput"></a>

```java
public GoogleDataLineageConfigIngestion getIngestionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestion">GoogleDataLineageConfigIngestion</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.timeoutsInput"></a>

```java
public IResolvable|GoogleDataLineageConfigTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts">GoogleDataLineageConfigTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataLineageConfigConfig <a name="GoogleDataLineageConfigConfig" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_config.GoogleDataLineageConfigConfig;

GoogleDataLineageConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ingestion(GoogleDataLineageConfigIngestion)
    .location(java.lang.String)
    .parent(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleDataLineageConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.ingestion">ingestion</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestion">GoogleDataLineageConfigIngestion</a></code> | ingestion block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.location">location</a></code> | <code>java.lang.String</code> | The region of the data lineage configuration for integration. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | Parent scope for the config. Format: projects/{project-id\|project-number} or folders/{folder-number} or organizations/{organization-number}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_lineage_config#id GoogleDataLineageConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts">GoogleDataLineageConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ingestion`<sup>Required</sup> <a name="ingestion" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.ingestion"></a>

```java
public GoogleDataLineageConfigIngestion getIngestion();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestion">GoogleDataLineageConfigIngestion</a>

ingestion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_lineage_config#ingestion GoogleDataLineageConfig#ingestion}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The region of the data lineage configuration for integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_lineage_config#location GoogleDataLineageConfig#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

Parent scope for the config. Format: projects/{project-id|project-number} or folders/{folder-number} or organizations/{organization-number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_lineage_config#parent GoogleDataLineageConfig#parent}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_lineage_config#deletion_policy GoogleDataLineageConfig#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_lineage_config#id GoogleDataLineageConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.timeouts"></a>

```java
public GoogleDataLineageConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts">GoogleDataLineageConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_lineage_config#timeouts GoogleDataLineageConfig#timeouts}

---

### GoogleDataLineageConfigIngestion <a name="GoogleDataLineageConfigIngestion" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestion.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_config.GoogleDataLineageConfigIngestion;

GoogleDataLineageConfigIngestion.builder()
    .rule(IResolvable|java.util.List<GoogleDataLineageConfigIngestionRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestion.property.rule">rule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule">GoogleDataLineageConfigIngestionRule</a>></code> | rule block. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestion.property.rule"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageConfigIngestionRule> getRule();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule">GoogleDataLineageConfigIngestionRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_lineage_config#rule GoogleDataLineageConfig#rule}

---

### GoogleDataLineageConfigIngestionRule <a name="GoogleDataLineageConfigIngestionRule" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_config.GoogleDataLineageConfigIngestionRule;

GoogleDataLineageConfigIngestionRule.builder()
    .integrationSelector(GoogleDataLineageConfigIngestionRuleIntegrationSelector)
    .lineageEnablement(GoogleDataLineageConfigIngestionRuleLineageEnablement)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule.property.integrationSelector">integrationSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelector">GoogleDataLineageConfigIngestionRuleIntegrationSelector</a></code> | integration_selector block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule.property.lineageEnablement">lineageEnablement</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablement">GoogleDataLineageConfigIngestionRuleLineageEnablement</a></code> | lineage_enablement block. |

---

##### `integrationSelector`<sup>Required</sup> <a name="integrationSelector" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule.property.integrationSelector"></a>

```java
public GoogleDataLineageConfigIngestionRuleIntegrationSelector getIntegrationSelector();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelector">GoogleDataLineageConfigIngestionRuleIntegrationSelector</a>

integration_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_lineage_config#integration_selector GoogleDataLineageConfig#integration_selector}

---

##### `lineageEnablement`<sup>Required</sup> <a name="lineageEnablement" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule.property.lineageEnablement"></a>

```java
public GoogleDataLineageConfigIngestionRuleLineageEnablement getLineageEnablement();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablement">GoogleDataLineageConfigIngestionRuleLineageEnablement</a>

lineage_enablement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_lineage_config#lineage_enablement GoogleDataLineageConfig#lineage_enablement}

---

### GoogleDataLineageConfigIngestionRuleIntegrationSelector <a name="GoogleDataLineageConfigIngestionRuleIntegrationSelector" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelector.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_config.GoogleDataLineageConfigIngestionRuleIntegrationSelector;

GoogleDataLineageConfigIngestionRuleIntegrationSelector.builder()
    .integration(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelector.property.integration">integration</a></code> | <code>java.lang.String</code> | Integration to which the rule applies. Possible values: ["DATAPROC", "LOOKER_CORE"]. |

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelector.property.integration"></a>

```java
public java.lang.String getIntegration();
```

- *Type:* java.lang.String

Integration to which the rule applies. Possible values: ["DATAPROC", "LOOKER_CORE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_lineage_config#integration GoogleDataLineageConfig#integration}

---

### GoogleDataLineageConfigIngestionRuleLineageEnablement <a name="GoogleDataLineageConfigIngestionRuleLineageEnablement" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablement.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_config.GoogleDataLineageConfigIngestionRuleLineageEnablement;

GoogleDataLineageConfigIngestionRuleLineageEnablement.builder()
    .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablement.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether ingestion of lineage should be enabled. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablement.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether ingestion of lineage should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_lineage_config#enabled GoogleDataLineageConfig#enabled}

---

### GoogleDataLineageConfigTimeouts <a name="GoogleDataLineageConfigTimeouts" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_config.GoogleDataLineageConfigTimeouts;

GoogleDataLineageConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_lineage_config#create GoogleDataLineageConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_lineage_config#delete GoogleDataLineageConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_lineage_config#update GoogleDataLineageConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_lineage_config#create GoogleDataLineageConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_lineage_config#delete GoogleDataLineageConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_data_lineage_config#update GoogleDataLineageConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataLineageConfigIngestionOutputReference <a name="GoogleDataLineageConfigIngestionOutputReference" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_config.GoogleDataLineageConfigIngestionOutputReference;

new GoogleDataLineageConfigIngestionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.putRule">putRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRule` <a name="putRule" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.putRule"></a>

```java
public void putRule(IResolvable|java.util.List<GoogleDataLineageConfigIngestionRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.putRule.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule">GoogleDataLineageConfigIngestionRule</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList">GoogleDataLineageConfigIngestionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.property.ruleInput">ruleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule">GoogleDataLineageConfigIngestionRule</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestion">GoogleDataLineageConfigIngestion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.property.rule"></a>

```java
public GoogleDataLineageConfigIngestionRuleList getRule();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList">GoogleDataLineageConfigIngestionRuleList</a>

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.property.ruleInput"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageConfigIngestionRule> getRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule">GoogleDataLineageConfigIngestionRule</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.property.internalValue"></a>

```java
public GoogleDataLineageConfigIngestion getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestion">GoogleDataLineageConfigIngestion</a>

---


### GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference <a name="GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_config.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference;

new GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.integrationInput">integrationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.integration">integration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelector">GoogleDataLineageConfigIngestionRuleIntegrationSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `integrationInput`<sup>Optional</sup> <a name="integrationInput" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.integrationInput"></a>

```java
public java.lang.String getIntegrationInput();
```

- *Type:* java.lang.String

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.integration"></a>

```java
public java.lang.String getIntegration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.internalValue"></a>

```java
public GoogleDataLineageConfigIngestionRuleIntegrationSelector getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelector">GoogleDataLineageConfigIngestionRuleIntegrationSelector</a>

---


### GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference <a name="GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_config.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference;

new GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablement">GoogleDataLineageConfigIngestionRuleLineageEnablement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.internalValue"></a>

```java
public GoogleDataLineageConfigIngestionRuleLineageEnablement getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablement">GoogleDataLineageConfigIngestionRuleLineageEnablement</a>

---


### GoogleDataLineageConfigIngestionRuleList <a name="GoogleDataLineageConfigIngestionRuleList" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_config.GoogleDataLineageConfigIngestionRuleList;

new GoogleDataLineageConfigIngestionRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.get"></a>

```java
public GoogleDataLineageConfigIngestionRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule">GoogleDataLineageConfigIngestionRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageConfigIngestionRule> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule">GoogleDataLineageConfigIngestionRule</a>>

---


### GoogleDataLineageConfigIngestionRuleOutputReference <a name="GoogleDataLineageConfigIngestionRuleOutputReference" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_config.GoogleDataLineageConfigIngestionRuleOutputReference;

new GoogleDataLineageConfigIngestionRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.putIntegrationSelector">putIntegrationSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.putLineageEnablement">putLineageEnablement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIntegrationSelector` <a name="putIntegrationSelector" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.putIntegrationSelector"></a>

```java
public void putIntegrationSelector(GoogleDataLineageConfigIngestionRuleIntegrationSelector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.putIntegrationSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelector">GoogleDataLineageConfigIngestionRuleIntegrationSelector</a>

---

##### `putLineageEnablement` <a name="putLineageEnablement" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.putLineageEnablement"></a>

```java
public void putLineageEnablement(GoogleDataLineageConfigIngestionRuleLineageEnablement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.putLineageEnablement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablement">GoogleDataLineageConfigIngestionRuleLineageEnablement</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.integrationSelector">integrationSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference">GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.lineageEnablement">lineageEnablement</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference">GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.integrationSelectorInput">integrationSelectorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelector">GoogleDataLineageConfigIngestionRuleIntegrationSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.lineageEnablementInput">lineageEnablementInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablement">GoogleDataLineageConfigIngestionRuleLineageEnablement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule">GoogleDataLineageConfigIngestionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `integrationSelector`<sup>Required</sup> <a name="integrationSelector" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.integrationSelector"></a>

```java
public GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference getIntegrationSelector();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference">GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference</a>

---

##### `lineageEnablement`<sup>Required</sup> <a name="lineageEnablement" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.lineageEnablement"></a>

```java
public GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference getLineageEnablement();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference">GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference</a>

---

##### `integrationSelectorInput`<sup>Optional</sup> <a name="integrationSelectorInput" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.integrationSelectorInput"></a>

```java
public GoogleDataLineageConfigIngestionRuleIntegrationSelector getIntegrationSelectorInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelector">GoogleDataLineageConfigIngestionRuleIntegrationSelector</a>

---

##### `lineageEnablementInput`<sup>Optional</sup> <a name="lineageEnablementInput" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.lineageEnablementInput"></a>

```java
public GoogleDataLineageConfigIngestionRuleLineageEnablement getLineageEnablementInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablement">GoogleDataLineageConfigIngestionRuleLineageEnablement</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDataLineageConfigIngestionRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule">GoogleDataLineageConfigIngestionRule</a>

---


### GoogleDataLineageConfigTimeoutsOutputReference <a name="GoogleDataLineageConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_config.GoogleDataLineageConfigTimeoutsOutputReference;

new GoogleDataLineageConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts">GoogleDataLineageConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDataLineageConfigTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts">GoogleDataLineageConfigTimeouts</a>

---



