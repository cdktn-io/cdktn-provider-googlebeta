# `googleDataCatalogEntryGroup` Submodule <a name="`googleDataCatalogEntryGroup` Submodule" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataCatalogEntryGroup <a name="GoogleDataCatalogEntryGroup" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group google_data_catalog_entry_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_catalog_entry_group.GoogleDataCatalogEntryGroup;

GoogleDataCatalogEntryGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .entryGroupId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleDataCatalogEntryGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.entryGroupId">entryGroupId</a></code> | <code>java.lang.String</code> | The id of the entry group to create. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Entry group description, which can consist of several sentences or paragraphs that describe entry group contents. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A short name to identify the entry group, for example, "analytics data - jan 2011". |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group#id GoogleDataCatalogEntryGroup#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group#project GoogleDataCatalogEntryGroup#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | EntryGroup location region. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeouts">GoogleDataCatalogEntryGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `entryGroupId`<sup>Required</sup> <a name="entryGroupId" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.entryGroupId"></a>

- *Type:* java.lang.String

The id of the entry group to create.

The id must begin with a letter or underscore,
contain only English letters, numbers and underscores, and be at most 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group#entry_group_id GoogleDataCatalogEntryGroup#entry_group_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group#deletion_policy GoogleDataCatalogEntryGroup#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Entry group description, which can consist of several sentences or paragraphs that describe entry group contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group#description GoogleDataCatalogEntryGroup#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A short name to identify the entry group, for example, "analytics data - jan 2011".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group#display_name GoogleDataCatalogEntryGroup#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group#id GoogleDataCatalogEntryGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group#project GoogleDataCatalogEntryGroup#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.region"></a>

- *Type:* java.lang.String

EntryGroup location region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group#region GoogleDataCatalogEntryGroup#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeouts">GoogleDataCatalogEntryGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group#timeouts GoogleDataCatalogEntryGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.putTimeouts"></a>

```java
public void putTimeouts(GoogleDataCatalogEntryGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeouts">GoogleDataCatalogEntryGroupTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataCatalogEntryGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_data_catalog_entry_group.GoogleDataCatalogEntryGroup;

GoogleDataCatalogEntryGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_data_catalog_entry_group.GoogleDataCatalogEntryGroup;

GoogleDataCatalogEntryGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_data_catalog_entry_group.GoogleDataCatalogEntryGroup;

GoogleDataCatalogEntryGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_data_catalog_entry_group.GoogleDataCatalogEntryGroup;

GoogleDataCatalogEntryGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDataCatalogEntryGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleDataCatalogEntryGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDataCatalogEntryGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDataCatalogEntryGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataCatalogEntryGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference">GoogleDataCatalogEntryGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.entryGroupIdInput">entryGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeouts">GoogleDataCatalogEntryGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.entryGroupId">entryGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.timeouts"></a>

```java
public GoogleDataCatalogEntryGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference">GoogleDataCatalogEntryGroupTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `entryGroupIdInput`<sup>Optional</sup> <a name="entryGroupIdInput" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.entryGroupIdInput"></a>

```java
public java.lang.String getEntryGroupIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.timeoutsInput"></a>

```java
public IResolvable|GoogleDataCatalogEntryGroupTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeouts">GoogleDataCatalogEntryGroupTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `entryGroupId`<sup>Required</sup> <a name="entryGroupId" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.entryGroupId"></a>

```java
public java.lang.String getEntryGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataCatalogEntryGroupConfig <a name="GoogleDataCatalogEntryGroupConfig" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_catalog_entry_group.GoogleDataCatalogEntryGroupConfig;

GoogleDataCatalogEntryGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .entryGroupId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleDataCatalogEntryGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.entryGroupId">entryGroupId</a></code> | <code>java.lang.String</code> | The id of the entry group to create. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | Entry group description, which can consist of several sentences or paragraphs that describe entry group contents. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A short name to identify the entry group, for example, "analytics data - jan 2011". |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group#id GoogleDataCatalogEntryGroup#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group#project GoogleDataCatalogEntryGroup#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.region">region</a></code> | <code>java.lang.String</code> | EntryGroup location region. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeouts">GoogleDataCatalogEntryGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `entryGroupId`<sup>Required</sup> <a name="entryGroupId" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.entryGroupId"></a>

```java
public java.lang.String getEntryGroupId();
```

- *Type:* java.lang.String

The id of the entry group to create.

The id must begin with a letter or underscore,
contain only English letters, numbers and underscores, and be at most 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group#entry_group_id GoogleDataCatalogEntryGroup#entry_group_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group#deletion_policy GoogleDataCatalogEntryGroup#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Entry group description, which can consist of several sentences or paragraphs that describe entry group contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group#description GoogleDataCatalogEntryGroup#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A short name to identify the entry group, for example, "analytics data - jan 2011".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group#display_name GoogleDataCatalogEntryGroup#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group#id GoogleDataCatalogEntryGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group#project GoogleDataCatalogEntryGroup#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

EntryGroup location region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group#region GoogleDataCatalogEntryGroup#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupConfig.property.timeouts"></a>

```java
public GoogleDataCatalogEntryGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeouts">GoogleDataCatalogEntryGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group#timeouts GoogleDataCatalogEntryGroup#timeouts}

---

### GoogleDataCatalogEntryGroupTimeouts <a name="GoogleDataCatalogEntryGroupTimeouts" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_catalog_entry_group.GoogleDataCatalogEntryGroupTimeouts;

GoogleDataCatalogEntryGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group#create GoogleDataCatalogEntryGroup#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group#delete GoogleDataCatalogEntryGroup#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group#update GoogleDataCatalogEntryGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group#create GoogleDataCatalogEntryGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group#delete GoogleDataCatalogEntryGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_data_catalog_entry_group#update GoogleDataCatalogEntryGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataCatalogEntryGroupTimeoutsOutputReference <a name="GoogleDataCatalogEntryGroupTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_catalog_entry_group.GoogleDataCatalogEntryGroupTimeoutsOutputReference;

new GoogleDataCatalogEntryGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeouts">GoogleDataCatalogEntryGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDataCatalogEntryGroupTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataCatalogEntryGroup.GoogleDataCatalogEntryGroupTimeouts">GoogleDataCatalogEntryGroupTimeouts</a>

---



