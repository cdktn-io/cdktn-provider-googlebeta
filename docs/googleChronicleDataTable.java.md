# `googleChronicleDataTable` Submodule <a name="`googleChronicleDataTable` Submodule" id="@cdktn/provider-google-beta.googleChronicleDataTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleDataTable <a name="GoogleChronicleDataTable" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table google_chronicle_data_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_data_table.GoogleChronicleDataTable;

GoogleChronicleDataTable.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataTableId(java.lang.String)
    .description(java.lang.String)
    .instance(java.lang.String)
    .location(java.lang.String)
//  .columnInfo(IResolvable|java.util.List<GoogleChronicleDataTableColumnInfo>)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .rowTimeToLive(java.lang.String)
//  .scopeInfo(GoogleChronicleDataTableScopeInfo)
//  .timeouts(GoogleChronicleDataTableTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.dataTableId">dataTableId</a></code> | <code>java.lang.String</code> | The ID to use for the data table. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A user-provided description of the data table. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.columnInfo">columnInfo</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo">GoogleChronicleDataTableColumnInfo</a>></code> | column_info block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | The policy governing the deletion of the data table. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#id GoogleChronicleDataTable#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#project GoogleChronicleDataTable#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.rowTimeToLive">rowTimeToLive</a></code> | <code>java.lang.String</code> | User-provided TTL of the data table. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.scopeInfo">scopeInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfo">GoogleChronicleDataTableScopeInfo</a></code> | scope_info block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts">GoogleChronicleDataTableTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataTableId`<sup>Required</sup> <a name="dataTableId" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.dataTableId"></a>

- *Type:* java.lang.String

The ID to use for the data table.

This is also the display name for
the data table. It must satisfy the following requirements:

* Starts with letter.
* Contains only letters, numbers and underscore.
* Must be unique and has length < 256.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#data_table_id GoogleChronicleDataTable#data_table_id}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A user-provided description of the data table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#description GoogleChronicleDataTable#description}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#instance GoogleChronicleDataTable#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#location GoogleChronicleDataTable#location}

---

##### `columnInfo`<sup>Optional</sup> <a name="columnInfo" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.columnInfo"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo">GoogleChronicleDataTableColumnInfo</a>>

column_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#column_info GoogleChronicleDataTable#column_info}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

The policy governing the deletion of the data table.

If set to 'FORCE', allows the deletion of the data table even if it contains rows.
If set to 'DEFAULT',or if the field is omitted, the data table must be empty before it can be deleted.
Possible values: DEFAULT, FORCE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#deletion_policy GoogleChronicleDataTable#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#id GoogleChronicleDataTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#project GoogleChronicleDataTable#project}.

---

##### `rowTimeToLive`<sup>Optional</sup> <a name="rowTimeToLive" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.rowTimeToLive"></a>

- *Type:* java.lang.String

User-provided TTL of the data table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#row_time_to_live GoogleChronicleDataTable#row_time_to_live}

---

##### `scopeInfo`<sup>Optional</sup> <a name="scopeInfo" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.scopeInfo"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfo">GoogleChronicleDataTableScopeInfo</a>

scope_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#scope_info GoogleChronicleDataTable#scope_info}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts">GoogleChronicleDataTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#timeouts GoogleChronicleDataTable#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.putColumnInfo">putColumnInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.putScopeInfo">putScopeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetColumnInfo">resetColumnInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetRowTimeToLive">resetRowTimeToLive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetScopeInfo">resetScopeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putColumnInfo` <a name="putColumnInfo" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.putColumnInfo"></a>

```java
public void putColumnInfo(IResolvable|java.util.List<GoogleChronicleDataTableColumnInfo> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.putColumnInfo.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo">GoogleChronicleDataTableColumnInfo</a>>

---

##### `putScopeInfo` <a name="putScopeInfo" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.putScopeInfo"></a>

```java
public void putScopeInfo(GoogleChronicleDataTableScopeInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.putScopeInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfo">GoogleChronicleDataTableScopeInfo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.putTimeouts"></a>

```java
public void putTimeouts(GoogleChronicleDataTableTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts">GoogleChronicleDataTableTimeouts</a>

---

##### `resetColumnInfo` <a name="resetColumnInfo" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetColumnInfo"></a>

```java
public void resetColumnInfo()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetProject"></a>

```java
public void resetProject()
```

##### `resetRowTimeToLive` <a name="resetRowTimeToLive" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetRowTimeToLive"></a>

```java
public void resetRowTimeToLive()
```

##### `resetScopeInfo` <a name="resetScopeInfo" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetScopeInfo"></a>

```java
public void resetScopeInfo()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleChronicleDataTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_data_table.GoogleChronicleDataTable;

GoogleChronicleDataTable.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_data_table.GoogleChronicleDataTable;

GoogleChronicleDataTable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_data_table.GoogleChronicleDataTable;

GoogleChronicleDataTable.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_data_table.GoogleChronicleDataTable;

GoogleChronicleDataTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleChronicleDataTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleChronicleDataTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleChronicleDataTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleChronicleDataTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleDataTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.approximateRowCount">approximateRowCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.columnInfo">columnInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList">GoogleChronicleDataTableColumnInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.dataTableUuid">dataTableUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.rowTimeToLiveUpdateTime">rowTimeToLiveUpdateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.ruleAssociationsCount">ruleAssociationsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.rules">rules</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.scopeInfo">scopeInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference">GoogleChronicleDataTableScopeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference">GoogleChronicleDataTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.updateSource">updateSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.columnInfoInput">columnInfoInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo">GoogleChronicleDataTableColumnInfo</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.dataTableIdInput">dataTableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.rowTimeToLiveInput">rowTimeToLiveInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.scopeInfoInput">scopeInfoInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfo">GoogleChronicleDataTableScopeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts">GoogleChronicleDataTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.dataTableId">dataTableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.rowTimeToLive">rowTimeToLive</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `approximateRowCount`<sup>Required</sup> <a name="approximateRowCount" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.approximateRowCount"></a>

```java
public java.lang.Number getApproximateRowCount();
```

- *Type:* java.lang.Number

---

##### `columnInfo`<sup>Required</sup> <a name="columnInfo" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.columnInfo"></a>

```java
public GoogleChronicleDataTableColumnInfoList getColumnInfo();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList">GoogleChronicleDataTableColumnInfoList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `dataTableUuid`<sup>Required</sup> <a name="dataTableUuid" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.dataTableUuid"></a>

```java
public java.lang.String getDataTableUuid();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rowTimeToLiveUpdateTime`<sup>Required</sup> <a name="rowTimeToLiveUpdateTime" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.rowTimeToLiveUpdateTime"></a>

```java
public java.lang.String getRowTimeToLiveUpdateTime();
```

- *Type:* java.lang.String

---

##### `ruleAssociationsCount`<sup>Required</sup> <a name="ruleAssociationsCount" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.ruleAssociationsCount"></a>

```java
public java.lang.Number getRuleAssociationsCount();
```

- *Type:* java.lang.Number

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.rules"></a>

```java
public java.util.List<java.lang.String> getRules();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scopeInfo`<sup>Required</sup> <a name="scopeInfo" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.scopeInfo"></a>

```java
public GoogleChronicleDataTableScopeInfoOutputReference getScopeInfo();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference">GoogleChronicleDataTableScopeInfoOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.timeouts"></a>

```java
public GoogleChronicleDataTableTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference">GoogleChronicleDataTableTimeoutsOutputReference</a>

---

##### `updateSource`<sup>Required</sup> <a name="updateSource" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.updateSource"></a>

```java
public java.lang.String getUpdateSource();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `columnInfoInput`<sup>Optional</sup> <a name="columnInfoInput" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.columnInfoInput"></a>

```java
public IResolvable|java.util.List<GoogleChronicleDataTableColumnInfo> getColumnInfoInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo">GoogleChronicleDataTableColumnInfo</a>>

---

##### `dataTableIdInput`<sup>Optional</sup> <a name="dataTableIdInput" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.dataTableIdInput"></a>

```java
public java.lang.String getDataTableIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `rowTimeToLiveInput`<sup>Optional</sup> <a name="rowTimeToLiveInput" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.rowTimeToLiveInput"></a>

```java
public java.lang.String getRowTimeToLiveInput();
```

- *Type:* java.lang.String

---

##### `scopeInfoInput`<sup>Optional</sup> <a name="scopeInfoInput" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.scopeInfoInput"></a>

```java
public GoogleChronicleDataTableScopeInfo getScopeInfoInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfo">GoogleChronicleDataTableScopeInfo</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.timeoutsInput"></a>

```java
public IResolvable|GoogleChronicleDataTableTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts">GoogleChronicleDataTableTimeouts</a>

---

##### `dataTableId`<sup>Required</sup> <a name="dataTableId" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.dataTableId"></a>

```java
public java.lang.String getDataTableId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `rowTimeToLive`<sup>Required</sup> <a name="rowTimeToLive" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.rowTimeToLive"></a>

```java
public java.lang.String getRowTimeToLive();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleDataTableColumnInfo <a name="GoogleChronicleDataTableColumnInfo" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_data_table.GoogleChronicleDataTableColumnInfo;

GoogleChronicleDataTableColumnInfo.builder()
    .columnIndex(java.lang.Number)
    .originalColumn(java.lang.String)
//  .columnType(java.lang.String)
//  .keyColumn(java.lang.Boolean|IResolvable)
//  .mappedColumnPath(java.lang.String)
//  .repeatedValues(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo.property.columnIndex">columnIndex</a></code> | <code>java.lang.Number</code> | Column Index. 0,1,2... |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo.property.originalColumn">originalColumn</a></code> | <code>java.lang.String</code> | Original column name of the Data Table (present in the CSV header in case of creation of data tables using file uploads). |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo.property.columnType">columnType</a></code> | <code>java.lang.String</code> | Column type can be STRING, CIDR (Ex- 10.1.1.0/24), REGEX Possible values: STRING REGEX CIDR NUMBER Possible values: ["STRING", "REGEX", "CIDR", "NUMBER"]. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo.property.keyColumn">keyColumn</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to include this column in the calculation of the row ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo.property.mappedColumnPath">mappedColumnPath</a></code> | <code>java.lang.String</code> | Entity proto field path that the column is mapped to. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo.property.repeatedValues">repeatedValues</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the column is a repeated values column. |

---

##### `columnIndex`<sup>Required</sup> <a name="columnIndex" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo.property.columnIndex"></a>

```java
public java.lang.Number getColumnIndex();
```

- *Type:* java.lang.Number

Column Index. 0,1,2...

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#column_index GoogleChronicleDataTable#column_index}

---

##### `originalColumn`<sup>Required</sup> <a name="originalColumn" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo.property.originalColumn"></a>

```java
public java.lang.String getOriginalColumn();
```

- *Type:* java.lang.String

Original column name of the Data Table (present in the CSV header in case of creation of data tables using file uploads).

It must satisfy the
following requirements:

* Starts with letter.
* Contains only letters, numbers and underscore.
* Must be unique and has length < 256

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#original_column GoogleChronicleDataTable#original_column}

---

##### `columnType`<sup>Optional</sup> <a name="columnType" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo.property.columnType"></a>

```java
public java.lang.String getColumnType();
```

- *Type:* java.lang.String

Column type can be STRING, CIDR (Ex- 10.1.1.0/24), REGEX Possible values: STRING REGEX CIDR NUMBER Possible values: ["STRING", "REGEX", "CIDR", "NUMBER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#column_type GoogleChronicleDataTable#column_type}

---

##### `keyColumn`<sup>Optional</sup> <a name="keyColumn" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo.property.keyColumn"></a>

```java
public java.lang.Boolean|IResolvable getKeyColumn();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to include this column in the calculation of the row ID.

If no columns have key_column = true, all columns will be included in the
calculation of the row ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#key_column GoogleChronicleDataTable#key_column}

---

##### `mappedColumnPath`<sup>Optional</sup> <a name="mappedColumnPath" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo.property.mappedColumnPath"></a>

```java
public java.lang.String getMappedColumnPath();
```

- *Type:* java.lang.String

Entity proto field path that the column is mapped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#mapped_column_path GoogleChronicleDataTable#mapped_column_path}

---

##### `repeatedValues`<sup>Optional</sup> <a name="repeatedValues" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo.property.repeatedValues"></a>

```java
public java.lang.Boolean|IResolvable getRepeatedValues();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the column is a repeated values column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#repeated_values GoogleChronicleDataTable#repeated_values}

---

### GoogleChronicleDataTableConfig <a name="GoogleChronicleDataTableConfig" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_data_table.GoogleChronicleDataTableConfig;

GoogleChronicleDataTableConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataTableId(java.lang.String)
    .description(java.lang.String)
    .instance(java.lang.String)
    .location(java.lang.String)
//  .columnInfo(IResolvable|java.util.List<GoogleChronicleDataTableColumnInfo>)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .rowTimeToLive(java.lang.String)
//  .scopeInfo(GoogleChronicleDataTableScopeInfo)
//  .timeouts(GoogleChronicleDataTableTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.dataTableId">dataTableId</a></code> | <code>java.lang.String</code> | The ID to use for the data table. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.description">description</a></code> | <code>java.lang.String</code> | A user-provided description of the data table. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.columnInfo">columnInfo</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo">GoogleChronicleDataTableColumnInfo</a>></code> | column_info block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | The policy governing the deletion of the data table. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#id GoogleChronicleDataTable#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#project GoogleChronicleDataTable#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.rowTimeToLive">rowTimeToLive</a></code> | <code>java.lang.String</code> | User-provided TTL of the data table. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.scopeInfo">scopeInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfo">GoogleChronicleDataTableScopeInfo</a></code> | scope_info block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts">GoogleChronicleDataTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataTableId`<sup>Required</sup> <a name="dataTableId" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.dataTableId"></a>

```java
public java.lang.String getDataTableId();
```

- *Type:* java.lang.String

The ID to use for the data table.

This is also the display name for
the data table. It must satisfy the following requirements:

* Starts with letter.
* Contains only letters, numbers and underscore.
* Must be unique and has length < 256.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#data_table_id GoogleChronicleDataTable#data_table_id}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A user-provided description of the data table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#description GoogleChronicleDataTable#description}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#instance GoogleChronicleDataTable#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#location GoogleChronicleDataTable#location}

---

##### `columnInfo`<sup>Optional</sup> <a name="columnInfo" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.columnInfo"></a>

```java
public IResolvable|java.util.List<GoogleChronicleDataTableColumnInfo> getColumnInfo();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo">GoogleChronicleDataTableColumnInfo</a>>

column_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#column_info GoogleChronicleDataTable#column_info}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

The policy governing the deletion of the data table.

If set to 'FORCE', allows the deletion of the data table even if it contains rows.
If set to 'DEFAULT',or if the field is omitted, the data table must be empty before it can be deleted.
Possible values: DEFAULT, FORCE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#deletion_policy GoogleChronicleDataTable#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#id GoogleChronicleDataTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#project GoogleChronicleDataTable#project}.

---

##### `rowTimeToLive`<sup>Optional</sup> <a name="rowTimeToLive" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.rowTimeToLive"></a>

```java
public java.lang.String getRowTimeToLive();
```

- *Type:* java.lang.String

User-provided TTL of the data table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#row_time_to_live GoogleChronicleDataTable#row_time_to_live}

---

##### `scopeInfo`<sup>Optional</sup> <a name="scopeInfo" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.scopeInfo"></a>

```java
public GoogleChronicleDataTableScopeInfo getScopeInfo();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfo">GoogleChronicleDataTableScopeInfo</a>

scope_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#scope_info GoogleChronicleDataTable#scope_info}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.timeouts"></a>

```java
public GoogleChronicleDataTableTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts">GoogleChronicleDataTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#timeouts GoogleChronicleDataTable#timeouts}

---

### GoogleChronicleDataTableScopeInfo <a name="GoogleChronicleDataTableScopeInfo" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfo.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_data_table.GoogleChronicleDataTableScopeInfo;

GoogleChronicleDataTableScopeInfo.builder()
    .dataAccessScopes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfo.property.dataAccessScopes">dataAccessScopes</a></code> | <code>java.util.List<java.lang.String></code> | Contains the list of scope names of the data table. |

---

##### `dataAccessScopes`<sup>Required</sup> <a name="dataAccessScopes" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfo.property.dataAccessScopes"></a>

```java
public java.util.List<java.lang.String> getDataAccessScopes();
```

- *Type:* java.util.List<java.lang.String>

Contains the list of scope names of the data table.

If the list is empty,
the data table is treated as unscoped. The scope names should be
full resource names and should be of the format:
"projects/{project}/locations/{location}/instances/{instance}/dataAccessScopes/{scope_name}"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#data_access_scopes GoogleChronicleDataTable#data_access_scopes}

---

### GoogleChronicleDataTableTimeouts <a name="GoogleChronicleDataTableTimeouts" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_data_table.GoogleChronicleDataTableTimeouts;

GoogleChronicleDataTableTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#create GoogleChronicleDataTable#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#delete GoogleChronicleDataTable#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#update GoogleChronicleDataTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#create GoogleChronicleDataTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#delete GoogleChronicleDataTable#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_data_table#update GoogleChronicleDataTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleDataTableColumnInfoList <a name="GoogleChronicleDataTableColumnInfoList" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_data_table.GoogleChronicleDataTableColumnInfoList;

new GoogleChronicleDataTableColumnInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.get"></a>

```java
public GoogleChronicleDataTableColumnInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo">GoogleChronicleDataTableColumnInfo</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleChronicleDataTableColumnInfo> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo">GoogleChronicleDataTableColumnInfo</a>>

---


### GoogleChronicleDataTableColumnInfoOutputReference <a name="GoogleChronicleDataTableColumnInfoOutputReference" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_data_table.GoogleChronicleDataTableColumnInfoOutputReference;

new GoogleChronicleDataTableColumnInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.resetColumnType">resetColumnType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.resetKeyColumn">resetKeyColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.resetMappedColumnPath">resetMappedColumnPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.resetRepeatedValues">resetRepeatedValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColumnType` <a name="resetColumnType" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.resetColumnType"></a>

```java
public void resetColumnType()
```

##### `resetKeyColumn` <a name="resetKeyColumn" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.resetKeyColumn"></a>

```java
public void resetKeyColumn()
```

##### `resetMappedColumnPath` <a name="resetMappedColumnPath" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.resetMappedColumnPath"></a>

```java
public void resetMappedColumnPath()
```

##### `resetRepeatedValues` <a name="resetRepeatedValues" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.resetRepeatedValues"></a>

```java
public void resetRepeatedValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.columnIndexInput">columnIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.columnTypeInput">columnTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.keyColumnInput">keyColumnInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.mappedColumnPathInput">mappedColumnPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.originalColumnInput">originalColumnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.repeatedValuesInput">repeatedValuesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.columnIndex">columnIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.columnType">columnType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.keyColumn">keyColumn</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.mappedColumnPath">mappedColumnPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.originalColumn">originalColumn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.repeatedValues">repeatedValues</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo">GoogleChronicleDataTableColumnInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnIndexInput`<sup>Optional</sup> <a name="columnIndexInput" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.columnIndexInput"></a>

```java
public java.lang.Number getColumnIndexInput();
```

- *Type:* java.lang.Number

---

##### `columnTypeInput`<sup>Optional</sup> <a name="columnTypeInput" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.columnTypeInput"></a>

```java
public java.lang.String getColumnTypeInput();
```

- *Type:* java.lang.String

---

##### `keyColumnInput`<sup>Optional</sup> <a name="keyColumnInput" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.keyColumnInput"></a>

```java
public java.lang.Boolean|IResolvable getKeyColumnInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mappedColumnPathInput`<sup>Optional</sup> <a name="mappedColumnPathInput" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.mappedColumnPathInput"></a>

```java
public java.lang.String getMappedColumnPathInput();
```

- *Type:* java.lang.String

---

##### `originalColumnInput`<sup>Optional</sup> <a name="originalColumnInput" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.originalColumnInput"></a>

```java
public java.lang.String getOriginalColumnInput();
```

- *Type:* java.lang.String

---

##### `repeatedValuesInput`<sup>Optional</sup> <a name="repeatedValuesInput" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.repeatedValuesInput"></a>

```java
public java.lang.Boolean|IResolvable getRepeatedValuesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `columnIndex`<sup>Required</sup> <a name="columnIndex" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.columnIndex"></a>

```java
public java.lang.Number getColumnIndex();
```

- *Type:* java.lang.Number

---

##### `columnType`<sup>Required</sup> <a name="columnType" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.columnType"></a>

```java
public java.lang.String getColumnType();
```

- *Type:* java.lang.String

---

##### `keyColumn`<sup>Required</sup> <a name="keyColumn" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.keyColumn"></a>

```java
public java.lang.Boolean|IResolvable getKeyColumn();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mappedColumnPath`<sup>Required</sup> <a name="mappedColumnPath" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.mappedColumnPath"></a>

```java
public java.lang.String getMappedColumnPath();
```

- *Type:* java.lang.String

---

##### `originalColumn`<sup>Required</sup> <a name="originalColumn" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.originalColumn"></a>

```java
public java.lang.String getOriginalColumn();
```

- *Type:* java.lang.String

---

##### `repeatedValues`<sup>Required</sup> <a name="repeatedValues" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.repeatedValues"></a>

```java
public java.lang.Boolean|IResolvable getRepeatedValues();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleChronicleDataTableColumnInfo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo">GoogleChronicleDataTableColumnInfo</a>

---


### GoogleChronicleDataTableScopeInfoOutputReference <a name="GoogleChronicleDataTableScopeInfoOutputReference" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_data_table.GoogleChronicleDataTableScopeInfoOutputReference;

new GoogleChronicleDataTableScopeInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.property.dataAccessScopesInput">dataAccessScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.property.dataAccessScopes">dataAccessScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfo">GoogleChronicleDataTableScopeInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataAccessScopesInput`<sup>Optional</sup> <a name="dataAccessScopesInput" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.property.dataAccessScopesInput"></a>

```java
public java.util.List<java.lang.String> getDataAccessScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataAccessScopes`<sup>Required</sup> <a name="dataAccessScopes" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.property.dataAccessScopes"></a>

```java
public java.util.List<java.lang.String> getDataAccessScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.property.internalValue"></a>

```java
public GoogleChronicleDataTableScopeInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfo">GoogleChronicleDataTableScopeInfo</a>

---


### GoogleChronicleDataTableTimeoutsOutputReference <a name="GoogleChronicleDataTableTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_data_table.GoogleChronicleDataTableTimeoutsOutputReference;

new GoogleChronicleDataTableTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts">GoogleChronicleDataTableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleChronicleDataTableTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts">GoogleChronicleDataTableTimeouts</a>

---



