# `googleBiglakeIcebergTable` Submodule <a name="`googleBiglakeIcebergTable` Submodule" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBiglakeIcebergTable <a name="GoogleBiglakeIcebergTable" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table google_biglake_iceberg_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_table.GoogleBiglakeIcebergTable;

GoogleBiglakeIcebergTable.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catalog(java.lang.String)
    .name(java.lang.String)
    .namespace(java.lang.String)
    .schema(GoogleBiglakeIcebergTableSchema)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .partitionSpec(GoogleBiglakeIcebergTablePartitionSpec)
//  .project(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(GoogleBiglakeIcebergTableTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.catalog">catalog</a></code> | <code>java.lang.String</code> | The name of the IcebergCatalog. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | The parent namespace of the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.schema">schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a></code> | schema block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#id GoogleBiglakeIcebergTable#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.partitionSpec">partitionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a></code> | partition_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#project GoogleBiglakeIcebergTable#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined properties for the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts">GoogleBiglakeIcebergTableTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.catalog"></a>

- *Type:* java.lang.String

The name of the IcebergCatalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#catalog GoogleBiglakeIcebergTable#catalog}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#name GoogleBiglakeIcebergTable#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

The parent namespace of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#namespace GoogleBiglakeIcebergTable#namespace}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.schema"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#schema GoogleBiglakeIcebergTable#schema}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#deletion_policy GoogleBiglakeIcebergTable#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#id GoogleBiglakeIcebergTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#location GoogleBiglakeIcebergTable#location}

---

##### `partitionSpec`<sup>Optional</sup> <a name="partitionSpec" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.partitionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a>

partition_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#partition_spec GoogleBiglakeIcebergTable#partition_spec}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#project GoogleBiglakeIcebergTable#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.properties"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined properties for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#properties GoogleBiglakeIcebergTable#properties}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts">GoogleBiglakeIcebergTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#timeouts GoogleBiglakeIcebergTable#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putPartitionSpec">putPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putSchema">putSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetPartitionSpec">resetPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPartitionSpec` <a name="putPartitionSpec" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putPartitionSpec"></a>

```java
public void putPartitionSpec(GoogleBiglakeIcebergTablePartitionSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putPartitionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a>

---

##### `putSchema` <a name="putSchema" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putSchema"></a>

```java
public void putSchema(GoogleBiglakeIcebergTableSchema value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putTimeouts"></a>

```java
public void putTimeouts(GoogleBiglakeIcebergTableTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts">GoogleBiglakeIcebergTableTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetPartitionSpec` <a name="resetPartitionSpec" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetPartitionSpec"></a>

```java
public void resetPartitionSpec()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetProject"></a>

```java
public void resetProject()
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBiglakeIcebergTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_table.GoogleBiglakeIcebergTable;

GoogleBiglakeIcebergTable.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_table.GoogleBiglakeIcebergTable;

GoogleBiglakeIcebergTable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_table.GoogleBiglakeIcebergTable;

GoogleBiglakeIcebergTable.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_table.GoogleBiglakeIcebergTable;

GoogleBiglakeIcebergTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleBiglakeIcebergTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleBiglakeIcebergTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleBiglakeIcebergTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleBiglakeIcebergTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBiglakeIcebergTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.partitionSpec">partitionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference">GoogleBiglakeIcebergTablePartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference">GoogleBiglakeIcebergTableSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference">GoogleBiglakeIcebergTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.catalogInput">catalogInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.partitionSpecInput">partitionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.schemaInput">schemaInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts">GoogleBiglakeIcebergTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.catalog">catalog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `partitionSpec`<sup>Required</sup> <a name="partitionSpec" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.partitionSpec"></a>

```java
public GoogleBiglakeIcebergTablePartitionSpecOutputReference getPartitionSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference">GoogleBiglakeIcebergTablePartitionSpecOutputReference</a>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.schema"></a>

```java
public GoogleBiglakeIcebergTableSchemaOutputReference getSchema();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference">GoogleBiglakeIcebergTableSchemaOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.timeouts"></a>

```java
public GoogleBiglakeIcebergTableTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference">GoogleBiglakeIcebergTableTimeoutsOutputReference</a>

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.catalogInput"></a>

```java
public java.lang.String getCatalogInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `partitionSpecInput`<sup>Optional</sup> <a name="partitionSpecInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.partitionSpecInput"></a>

```java
public GoogleBiglakeIcebergTablePartitionSpec getPartitionSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.schemaInput"></a>

```java
public GoogleBiglakeIcebergTableSchema getSchemaInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.timeoutsInput"></a>

```java
public IResolvable|GoogleBiglakeIcebergTableTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts">GoogleBiglakeIcebergTableTimeouts</a>

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBiglakeIcebergTableConfig <a name="GoogleBiglakeIcebergTableConfig" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_table.GoogleBiglakeIcebergTableConfig;

GoogleBiglakeIcebergTableConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catalog(java.lang.String)
    .name(java.lang.String)
    .namespace(java.lang.String)
    .schema(GoogleBiglakeIcebergTableSchema)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .partitionSpec(GoogleBiglakeIcebergTablePartitionSpec)
//  .project(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(GoogleBiglakeIcebergTableTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.catalog">catalog</a></code> | <code>java.lang.String</code> | The name of the IcebergCatalog. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The parent namespace of the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a></code> | schema block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#id GoogleBiglakeIcebergTable#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.partitionSpec">partitionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a></code> | partition_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#project GoogleBiglakeIcebergTable#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined properties for the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts">GoogleBiglakeIcebergTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

The name of the IcebergCatalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#catalog GoogleBiglakeIcebergTable#catalog}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#name GoogleBiglakeIcebergTable#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The parent namespace of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#namespace GoogleBiglakeIcebergTable#namespace}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.schema"></a>

```java
public GoogleBiglakeIcebergTableSchema getSchema();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#schema GoogleBiglakeIcebergTable#schema}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#deletion_policy GoogleBiglakeIcebergTable#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#id GoogleBiglakeIcebergTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#location GoogleBiglakeIcebergTable#location}

---

##### `partitionSpec`<sup>Optional</sup> <a name="partitionSpec" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.partitionSpec"></a>

```java
public GoogleBiglakeIcebergTablePartitionSpec getPartitionSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a>

partition_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#partition_spec GoogleBiglakeIcebergTable#partition_spec}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#project GoogleBiglakeIcebergTable#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined properties for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#properties GoogleBiglakeIcebergTable#properties}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.timeouts"></a>

```java
public GoogleBiglakeIcebergTableTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts">GoogleBiglakeIcebergTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#timeouts GoogleBiglakeIcebergTable#timeouts}

---

### GoogleBiglakeIcebergTablePartitionSpec <a name="GoogleBiglakeIcebergTablePartitionSpec" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_table.GoogleBiglakeIcebergTablePartitionSpec;

GoogleBiglakeIcebergTablePartitionSpec.builder()
    .fields(IResolvable|java.util.List<GoogleBiglakeIcebergTablePartitionSpecFields>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec.property.fields">fields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields">GoogleBiglakeIcebergTablePartitionSpecFields</a>></code> | fields block. |

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec.property.fields"></a>

```java
public IResolvable|java.util.List<GoogleBiglakeIcebergTablePartitionSpecFields> getFields();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields">GoogleBiglakeIcebergTablePartitionSpecFields</a>>

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#fields GoogleBiglakeIcebergTable#fields}

---

### GoogleBiglakeIcebergTablePartitionSpecFields <a name="GoogleBiglakeIcebergTablePartitionSpecFields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_table.GoogleBiglakeIcebergTablePartitionSpecFields;

GoogleBiglakeIcebergTablePartitionSpecFields.builder()
    .name(java.lang.String)
    .sourceId(java.lang.Number)
    .transform(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.property.name">name</a></code> | <code>java.lang.String</code> | The name of the partition field. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.property.sourceId">sourceId</a></code> | <code>java.lang.Number</code> | The source field ID for the partition field. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.property.transform">transform</a></code> | <code>java.lang.String</code> | The transform to apply to the source field. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the partition field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#name GoogleBiglakeIcebergTable#name}

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.property.sourceId"></a>

```java
public java.lang.Number getSourceId();
```

- *Type:* java.lang.Number

The source field ID for the partition field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#source_id GoogleBiglakeIcebergTable#source_id}

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.property.transform"></a>

```java
public java.lang.String getTransform();
```

- *Type:* java.lang.String

The transform to apply to the source field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#transform GoogleBiglakeIcebergTable#transform}

---

### GoogleBiglakeIcebergTableSchema <a name="GoogleBiglakeIcebergTableSchema" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_table.GoogleBiglakeIcebergTableSchema;

GoogleBiglakeIcebergTableSchema.builder()
    .fields(IResolvable|java.util.List<GoogleBiglakeIcebergTableSchemaFields>)
//  .identifierFieldIds(java.util.List<java.lang.Number>)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.property.fields">fields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields">GoogleBiglakeIcebergTableSchemaFields</a>></code> | fields block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.property.identifierFieldIds">identifierFieldIds</a></code> | <code>java.util.List<java.lang.Number></code> | The field IDs that make up the identifier for the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.property.type">type</a></code> | <code>java.lang.String</code> | The type of the schema. |

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.property.fields"></a>

```java
public IResolvable|java.util.List<GoogleBiglakeIcebergTableSchemaFields> getFields();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields">GoogleBiglakeIcebergTableSchemaFields</a>>

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#fields GoogleBiglakeIcebergTable#fields}

---

##### `identifierFieldIds`<sup>Optional</sup> <a name="identifierFieldIds" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.property.identifierFieldIds"></a>

```java
public java.util.List<java.lang.Number> getIdentifierFieldIds();
```

- *Type:* java.util.List<java.lang.Number>

The field IDs that make up the identifier for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#identifier_field_ids GoogleBiglakeIcebergTable#identifier_field_ids}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#type GoogleBiglakeIcebergTable#type}

---

### GoogleBiglakeIcebergTableSchemaFields <a name="GoogleBiglakeIcebergTableSchemaFields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_table.GoogleBiglakeIcebergTableSchemaFields;

GoogleBiglakeIcebergTableSchemaFields.builder()
    .id(java.lang.Number)
    .name(java.lang.String)
    .required(java.lang.Boolean|IResolvable)
    .type(java.lang.String)
//  .doc(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.id">id</a></code> | <code>java.lang.Number</code> | The unique identifier of the field. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.name">name</a></code> | <code>java.lang.String</code> | The name of the field. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.required">required</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the field is required. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.type">type</a></code> | <code>java.lang.String</code> | The type of the field. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.doc">doc</a></code> | <code>java.lang.String</code> | A description of the field. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

The unique identifier of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#id GoogleBiglakeIcebergTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#name GoogleBiglakeIcebergTable#name}

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.required"></a>

```java
public java.lang.Boolean|IResolvable getRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#required GoogleBiglakeIcebergTable#required}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#type GoogleBiglakeIcebergTable#type}

---

##### `doc`<sup>Optional</sup> <a name="doc" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.doc"></a>

```java
public java.lang.String getDoc();
```

- *Type:* java.lang.String

A description of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#doc GoogleBiglakeIcebergTable#doc}

---

### GoogleBiglakeIcebergTableTimeouts <a name="GoogleBiglakeIcebergTableTimeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_table.GoogleBiglakeIcebergTableTimeouts;

GoogleBiglakeIcebergTableTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#create GoogleBiglakeIcebergTable#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#delete GoogleBiglakeIcebergTable#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#update GoogleBiglakeIcebergTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#create GoogleBiglakeIcebergTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#delete GoogleBiglakeIcebergTable#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_table#update GoogleBiglakeIcebergTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBiglakeIcebergTablePartitionSpecFieldsList <a name="GoogleBiglakeIcebergTablePartitionSpecFieldsList" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_table.GoogleBiglakeIcebergTablePartitionSpecFieldsList;

new GoogleBiglakeIcebergTablePartitionSpecFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.get"></a>

```java
public GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields">GoogleBiglakeIcebergTablePartitionSpecFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleBiglakeIcebergTablePartitionSpecFields> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields">GoogleBiglakeIcebergTablePartitionSpecFields</a>>

---


### GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference <a name="GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_table.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference;

new GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.fieldId">fieldId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.sourceIdInput">sourceIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.transformInput">transformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.sourceId">sourceId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.transform">transform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields">GoogleBiglakeIcebergTablePartitionSpecFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldId`<sup>Required</sup> <a name="fieldId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.fieldId"></a>

```java
public java.lang.Number getFieldId();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sourceIdInput`<sup>Optional</sup> <a name="sourceIdInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.sourceIdInput"></a>

```java
public java.lang.Number getSourceIdInput();
```

- *Type:* java.lang.Number

---

##### `transformInput`<sup>Optional</sup> <a name="transformInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.transformInput"></a>

```java
public java.lang.String getTransformInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.sourceId"></a>

```java
public java.lang.Number getSourceId();
```

- *Type:* java.lang.Number

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.transform"></a>

```java
public java.lang.String getTransform();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleBiglakeIcebergTablePartitionSpecFields getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields">GoogleBiglakeIcebergTablePartitionSpecFields</a>

---


### GoogleBiglakeIcebergTablePartitionSpecOutputReference <a name="GoogleBiglakeIcebergTablePartitionSpecOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_table.GoogleBiglakeIcebergTablePartitionSpecOutputReference;

new GoogleBiglakeIcebergTablePartitionSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.putFields">putFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.putFields"></a>

```java
public void putFields(IResolvable|java.util.List<GoogleBiglakeIcebergTablePartitionSpecFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.putFields.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields">GoogleBiglakeIcebergTablePartitionSpecFields</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList">GoogleBiglakeIcebergTablePartitionSpecFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.specId">specId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields">GoogleBiglakeIcebergTablePartitionSpecFields</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.fields"></a>

```java
public GoogleBiglakeIcebergTablePartitionSpecFieldsList getFields();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList">GoogleBiglakeIcebergTablePartitionSpecFieldsList</a>

---

##### `specId`<sup>Required</sup> <a name="specId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.specId"></a>

```java
public java.lang.Number getSpecId();
```

- *Type:* java.lang.Number

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.fieldsInput"></a>

```java
public IResolvable|java.util.List<GoogleBiglakeIcebergTablePartitionSpecFields> getFieldsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields">GoogleBiglakeIcebergTablePartitionSpecFields</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.internalValue"></a>

```java
public GoogleBiglakeIcebergTablePartitionSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a>

---


### GoogleBiglakeIcebergTableSchemaFieldsList <a name="GoogleBiglakeIcebergTableSchemaFieldsList" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_table.GoogleBiglakeIcebergTableSchemaFieldsList;

new GoogleBiglakeIcebergTableSchemaFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.get"></a>

```java
public GoogleBiglakeIcebergTableSchemaFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields">GoogleBiglakeIcebergTableSchemaFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleBiglakeIcebergTableSchemaFields> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields">GoogleBiglakeIcebergTableSchemaFields</a>>

---


### GoogleBiglakeIcebergTableSchemaFieldsOutputReference <a name="GoogleBiglakeIcebergTableSchemaFieldsOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_table.GoogleBiglakeIcebergTableSchemaFieldsOutputReference;

new GoogleBiglakeIcebergTableSchemaFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.resetDoc">resetDoc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDoc` <a name="resetDoc" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.resetDoc"></a>

```java
public void resetDoc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.docInput">docInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.requiredInput">requiredInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.doc">doc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.required">required</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields">GoogleBiglakeIcebergTableSchemaFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `docInput`<sup>Optional</sup> <a name="docInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.docInput"></a>

```java
public java.lang.String getDocInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.idInput"></a>

```java
public java.lang.Number getIdInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.requiredInput"></a>

```java
public java.lang.Boolean|IResolvable getRequiredInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `doc`<sup>Required</sup> <a name="doc" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.doc"></a>

```java
public java.lang.String getDoc();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.required"></a>

```java
public java.lang.Boolean|IResolvable getRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleBiglakeIcebergTableSchemaFields getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields">GoogleBiglakeIcebergTableSchemaFields</a>

---


### GoogleBiglakeIcebergTableSchemaOutputReference <a name="GoogleBiglakeIcebergTableSchemaOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_table.GoogleBiglakeIcebergTableSchemaOutputReference;

new GoogleBiglakeIcebergTableSchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resetIdentifierFieldIds">resetIdentifierFieldIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.putFields"></a>

```java
public void putFields(IResolvable|java.util.List<GoogleBiglakeIcebergTableSchemaFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields">GoogleBiglakeIcebergTableSchemaFields</a>>

---

##### `resetIdentifierFieldIds` <a name="resetIdentifierFieldIds" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resetIdentifierFieldIds"></a>

```java
public void resetIdentifierFieldIds()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList">GoogleBiglakeIcebergTableSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.schemaId">schemaId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields">GoogleBiglakeIcebergTableSchemaFields</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.identifierFieldIdsInput">identifierFieldIdsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.identifierFieldIds">identifierFieldIds</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.fields"></a>

```java
public GoogleBiglakeIcebergTableSchemaFieldsList getFields();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList">GoogleBiglakeIcebergTableSchemaFieldsList</a>

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.schemaId"></a>

```java
public java.lang.Number getSchemaId();
```

- *Type:* java.lang.Number

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.fieldsInput"></a>

```java
public IResolvable|java.util.List<GoogleBiglakeIcebergTableSchemaFields> getFieldsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields">GoogleBiglakeIcebergTableSchemaFields</a>>

---

##### `identifierFieldIdsInput`<sup>Optional</sup> <a name="identifierFieldIdsInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.identifierFieldIdsInput"></a>

```java
public java.util.List<java.lang.Number> getIdentifierFieldIdsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identifierFieldIds`<sup>Required</sup> <a name="identifierFieldIds" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.identifierFieldIds"></a>

```java
public java.util.List<java.lang.Number> getIdentifierFieldIds();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.internalValue"></a>

```java
public GoogleBiglakeIcebergTableSchema getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a>

---


### GoogleBiglakeIcebergTableTimeoutsOutputReference <a name="GoogleBiglakeIcebergTableTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_table.GoogleBiglakeIcebergTableTimeoutsOutputReference;

new GoogleBiglakeIcebergTableTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts">GoogleBiglakeIcebergTableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleBiglakeIcebergTableTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts">GoogleBiglakeIcebergTableTimeouts</a>

---



