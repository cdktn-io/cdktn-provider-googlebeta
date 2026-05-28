# `googleDataplexDataProductDataAsset` Submodule <a name="`googleDataplexDataProductDataAsset` Submodule" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexDataProductDataAsset <a name="GoogleDataplexDataProductDataAsset" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset google_dataplex_data_product_data_asset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_data_product_data_asset.GoogleDataplexDataProductDataAsset;

GoogleDataplexDataProductDataAsset.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataAssetId(java.lang.String)
    .dataProductId(java.lang.String)
    .location(java.lang.String)
    .resource(java.lang.String)
//  .accessGroupConfigs(IResolvable|java.util.List<GoogleDataplexDataProductDataAssetAccessGroupConfigs>)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleDataplexDataProductDataAssetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.dataAssetId">dataAssetId</a></code> | <code>java.lang.String</code> | The ID of the data asset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.dataProductId">dataProductId</a></code> | <code>java.lang.String</code> | The ID of the parent data product. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the data asset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.resource">resource</a></code> | <code>java.lang.String</code> | Full resource name of the cloud resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.accessGroupConfigs">accessGroupConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>></code> | access_group_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#id GoogleDataplexDataProductDataAsset#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#project GoogleDataplexDataProductDataAsset#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataAssetId`<sup>Required</sup> <a name="dataAssetId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.dataAssetId"></a>

- *Type:* java.lang.String

The ID of the data asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#data_asset_id GoogleDataplexDataProductDataAsset#data_asset_id}

---

##### `dataProductId`<sup>Required</sup> <a name="dataProductId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.dataProductId"></a>

- *Type:* java.lang.String

The ID of the parent data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#data_product_id GoogleDataplexDataProductDataAsset#data_product_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the data asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#location GoogleDataplexDataProductDataAsset#location}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.resource"></a>

- *Type:* java.lang.String

Full resource name of the cloud resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#resource GoogleDataplexDataProductDataAsset#resource}

---

##### `accessGroupConfigs`<sup>Optional</sup> <a name="accessGroupConfigs" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.accessGroupConfigs"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>>

access_group_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#access_group_configs GoogleDataplexDataProductDataAsset#access_group_configs}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#deletion_policy GoogleDataplexDataProductDataAsset#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#id GoogleDataplexDataProductDataAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#labels GoogleDataplexDataProductDataAsset#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#project GoogleDataplexDataProductDataAsset#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#timeouts GoogleDataplexDataProductDataAsset#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.putAccessGroupConfigs">putAccessGroupConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetAccessGroupConfigs">resetAccessGroupConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessGroupConfigs` <a name="putAccessGroupConfigs" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.putAccessGroupConfigs"></a>

```java
public void putAccessGroupConfigs(IResolvable|java.util.List<GoogleDataplexDataProductDataAssetAccessGroupConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.putAccessGroupConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.putTimeouts"></a>

```java
public void putTimeouts(GoogleDataplexDataProductDataAssetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a>

---

##### `resetAccessGroupConfigs` <a name="resetAccessGroupConfigs" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetAccessGroupConfigs"></a>

```java
public void resetAccessGroupConfigs()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataplexDataProductDataAsset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_data_product_data_asset.GoogleDataplexDataProductDataAsset;

GoogleDataplexDataProductDataAsset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_data_product_data_asset.GoogleDataplexDataProductDataAsset;

GoogleDataplexDataProductDataAsset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_data_product_data_asset.GoogleDataplexDataProductDataAsset;

GoogleDataplexDataProductDataAsset.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_data_product_data_asset.GoogleDataplexDataProductDataAsset;

GoogleDataplexDataProductDataAsset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDataplexDataProductDataAsset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleDataplexDataProductDataAsset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDataplexDataProductDataAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDataplexDataProductDataAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataplexDataProductDataAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.accessGroupConfigs">accessGroupConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList">GoogleDataplexDataProductDataAssetAccessGroupConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference">GoogleDataplexDataProductDataAssetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.accessGroupConfigsInput">accessGroupConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataAssetIdInput">dataAssetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataProductIdInput">dataProductIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.resourceInput">resourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataAssetId">dataAssetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataProductId">dataProductId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.resource">resource</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessGroupConfigs`<sup>Required</sup> <a name="accessGroupConfigs" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.accessGroupConfigs"></a>

```java
public GoogleDataplexDataProductDataAssetAccessGroupConfigsList getAccessGroupConfigs();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList">GoogleDataplexDataProductDataAssetAccessGroupConfigsList</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.timeouts"></a>

```java
public GoogleDataplexDataProductDataAssetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference">GoogleDataplexDataProductDataAssetTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `accessGroupConfigsInput`<sup>Optional</sup> <a name="accessGroupConfigsInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.accessGroupConfigsInput"></a>

```java
public IResolvable|java.util.List<GoogleDataplexDataProductDataAssetAccessGroupConfigs> getAccessGroupConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>>

---

##### `dataAssetIdInput`<sup>Optional</sup> <a name="dataAssetIdInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataAssetIdInput"></a>

```java
public java.lang.String getDataAssetIdInput();
```

- *Type:* java.lang.String

---

##### `dataProductIdInput`<sup>Optional</sup> <a name="dataProductIdInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataProductIdInput"></a>

```java
public java.lang.String getDataProductIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.resourceInput"></a>

```java
public java.lang.String getResourceInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.timeoutsInput"></a>

```java
public IResolvable|GoogleDataplexDataProductDataAssetTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a>

---

##### `dataAssetId`<sup>Required</sup> <a name="dataAssetId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataAssetId"></a>

```java
public java.lang.String getDataAssetId();
```

- *Type:* java.lang.String

---

##### `dataProductId`<sup>Required</sup> <a name="dataProductId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataProductId"></a>

```java
public java.lang.String getDataProductId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexDataProductDataAssetAccessGroupConfigs <a name="GoogleDataplexDataProductDataAssetAccessGroupConfigs" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_data_product_data_asset.GoogleDataplexDataProductDataAssetAccessGroupConfigs;

GoogleDataplexDataProductDataAssetAccessGroupConfigs.builder()
    .accessGroup(java.lang.String)
//  .iamRoles(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs.property.accessGroup">accessGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#access_group GoogleDataplexDataProductDataAsset#access_group}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs.property.iamRoles">iamRoles</a></code> | <code>java.util.List<java.lang.String></code> | IAM roles granted on the resource. |

---

##### `accessGroup`<sup>Required</sup> <a name="accessGroup" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs.property.accessGroup"></a>

```java
public java.lang.String getAccessGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#access_group GoogleDataplexDataProductDataAsset#access_group}.

---

##### `iamRoles`<sup>Optional</sup> <a name="iamRoles" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs.property.iamRoles"></a>

```java
public java.util.List<java.lang.String> getIamRoles();
```

- *Type:* java.util.List<java.lang.String>

IAM roles granted on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#iam_roles GoogleDataplexDataProductDataAsset#iam_roles}

---

### GoogleDataplexDataProductDataAssetConfig <a name="GoogleDataplexDataProductDataAssetConfig" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_data_product_data_asset.GoogleDataplexDataProductDataAssetConfig;

GoogleDataplexDataProductDataAssetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataAssetId(java.lang.String)
    .dataProductId(java.lang.String)
    .location(java.lang.String)
    .resource(java.lang.String)
//  .accessGroupConfigs(IResolvable|java.util.List<GoogleDataplexDataProductDataAssetAccessGroupConfigs>)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleDataplexDataProductDataAssetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.dataAssetId">dataAssetId</a></code> | <code>java.lang.String</code> | The ID of the data asset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.dataProductId">dataProductId</a></code> | <code>java.lang.String</code> | The ID of the parent data product. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the data asset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.resource">resource</a></code> | <code>java.lang.String</code> | Full resource name of the cloud resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.accessGroupConfigs">accessGroupConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>></code> | access_group_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#id GoogleDataplexDataProductDataAsset#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#project GoogleDataplexDataProductDataAsset#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataAssetId`<sup>Required</sup> <a name="dataAssetId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.dataAssetId"></a>

```java
public java.lang.String getDataAssetId();
```

- *Type:* java.lang.String

The ID of the data asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#data_asset_id GoogleDataplexDataProductDataAsset#data_asset_id}

---

##### `dataProductId`<sup>Required</sup> <a name="dataProductId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.dataProductId"></a>

```java
public java.lang.String getDataProductId();
```

- *Type:* java.lang.String

The ID of the parent data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#data_product_id GoogleDataplexDataProductDataAsset#data_product_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the data asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#location GoogleDataplexDataProductDataAsset#location}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

Full resource name of the cloud resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#resource GoogleDataplexDataProductDataAsset#resource}

---

##### `accessGroupConfigs`<sup>Optional</sup> <a name="accessGroupConfigs" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.accessGroupConfigs"></a>

```java
public IResolvable|java.util.List<GoogleDataplexDataProductDataAssetAccessGroupConfigs> getAccessGroupConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>>

access_group_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#access_group_configs GoogleDataplexDataProductDataAsset#access_group_configs}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#deletion_policy GoogleDataplexDataProductDataAsset#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#id GoogleDataplexDataProductDataAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#labels GoogleDataplexDataProductDataAsset#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#project GoogleDataplexDataProductDataAsset#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.timeouts"></a>

```java
public GoogleDataplexDataProductDataAssetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#timeouts GoogleDataplexDataProductDataAsset#timeouts}

---

### GoogleDataplexDataProductDataAssetTimeouts <a name="GoogleDataplexDataProductDataAssetTimeouts" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_data_product_data_asset.GoogleDataplexDataProductDataAssetTimeouts;

GoogleDataplexDataProductDataAssetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#create GoogleDataplexDataProductDataAsset#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#delete GoogleDataplexDataProductDataAsset#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#update GoogleDataplexDataProductDataAsset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#create GoogleDataplexDataProductDataAsset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#delete GoogleDataplexDataProductDataAsset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#update GoogleDataplexDataProductDataAsset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexDataProductDataAssetAccessGroupConfigsList <a name="GoogleDataplexDataProductDataAssetAccessGroupConfigsList" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_data_product_data_asset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList;

new GoogleDataplexDataProductDataAssetAccessGroupConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.get"></a>

```java
public GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDataplexDataProductDataAssetAccessGroupConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>>

---


### GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference <a name="GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_data_product_data_asset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference;

new GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.resetIamRoles">resetIamRoles</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIamRoles` <a name="resetIamRoles" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.resetIamRoles"></a>

```java
public void resetIamRoles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.accessGroupInput">accessGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.iamRolesInput">iamRolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.accessGroup">accessGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.iamRoles">iamRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessGroupInput`<sup>Optional</sup> <a name="accessGroupInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.accessGroupInput"></a>

```java
public java.lang.String getAccessGroupInput();
```

- *Type:* java.lang.String

---

##### `iamRolesInput`<sup>Optional</sup> <a name="iamRolesInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.iamRolesInput"></a>

```java
public java.util.List<java.lang.String> getIamRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessGroup`<sup>Required</sup> <a name="accessGroup" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.accessGroup"></a>

```java
public java.lang.String getAccessGroup();
```

- *Type:* java.lang.String

---

##### `iamRoles`<sup>Required</sup> <a name="iamRoles" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.iamRoles"></a>

```java
public java.util.List<java.lang.String> getIamRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDataplexDataProductDataAssetAccessGroupConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>

---


### GoogleDataplexDataProductDataAssetTimeoutsOutputReference <a name="GoogleDataplexDataProductDataAssetTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_data_product_data_asset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference;

new GoogleDataplexDataProductDataAssetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDataplexDataProductDataAssetTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a>

---



