# `googleDataplexDataProduct` Submodule <a name="`googleDataplexDataProduct` Submodule" id="@cdktn/provider-google-beta.googleDataplexDataProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexDataProduct <a name="GoogleDataplexDataProduct" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product google_dataplex_data_product}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_data_product.GoogleDataplexDataProduct;

GoogleDataplexDataProduct.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataProductId(java.lang.String)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .ownerEmails(java.util.List<java.lang.String>)
//  .accessApprovalConfig(GoogleDataplexDataProductAccessApprovalConfig)
//  .accessGroups(IResolvable|java.util.List<GoogleDataplexDataProductAccessGroups>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleDataplexDataProductTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.dataProductId">dataProductId</a></code> | <code>java.lang.String</code> | The ID of the data product. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User-friendly display name. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the data product. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.ownerEmails">ownerEmails</a></code> | <code>java.util.List<java.lang.String></code> | Emails of the owners. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.accessApprovalConfig">accessApprovalConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfig">GoogleDataplexDataProductAccessApprovalConfig</a></code> | access_approval_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.accessGroups">accessGroups</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups">GoogleDataplexDataProductAccessGroups</a>></code> | access_groups block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the data product. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#id GoogleDataplexDataProduct#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#project GoogleDataplexDataProduct#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts">GoogleDataplexDataProductTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataProductId`<sup>Required</sup> <a name="dataProductId" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.dataProductId"></a>

- *Type:* java.lang.String

The ID of the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#data_product_id GoogleDataplexDataProduct#data_product_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User-friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#display_name GoogleDataplexDataProduct#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#location GoogleDataplexDataProduct#location}

---

##### `ownerEmails`<sup>Required</sup> <a name="ownerEmails" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.ownerEmails"></a>

- *Type:* java.util.List<java.lang.String>

Emails of the owners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#owner_emails GoogleDataplexDataProduct#owner_emails}

---

##### `accessApprovalConfig`<sup>Optional</sup> <a name="accessApprovalConfig" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.accessApprovalConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfig">GoogleDataplexDataProductAccessApprovalConfig</a>

access_approval_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#access_approval_config GoogleDataplexDataProduct#access_approval_config}

---

##### `accessGroups`<sup>Optional</sup> <a name="accessGroups" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.accessGroups"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups">GoogleDataplexDataProductAccessGroups</a>>

access_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#access_groups GoogleDataplexDataProduct#access_groups}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#deletion_policy GoogleDataplexDataProduct#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#description GoogleDataplexDataProduct#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#id GoogleDataplexDataProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#labels GoogleDataplexDataProduct#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#project GoogleDataplexDataProduct#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts">GoogleDataplexDataProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#timeouts GoogleDataplexDataProduct#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.putAccessApprovalConfig">putAccessApprovalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.putAccessGroups">putAccessGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetAccessApprovalConfig">resetAccessApprovalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetAccessGroups">resetAccessGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessApprovalConfig` <a name="putAccessApprovalConfig" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.putAccessApprovalConfig"></a>

```java
public void putAccessApprovalConfig(GoogleDataplexDataProductAccessApprovalConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.putAccessApprovalConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfig">GoogleDataplexDataProductAccessApprovalConfig</a>

---

##### `putAccessGroups` <a name="putAccessGroups" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.putAccessGroups"></a>

```java
public void putAccessGroups(IResolvable|java.util.List<GoogleDataplexDataProductAccessGroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.putAccessGroups.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups">GoogleDataplexDataProductAccessGroups</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.putTimeouts"></a>

```java
public void putTimeouts(GoogleDataplexDataProductTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts">GoogleDataplexDataProductTimeouts</a>

---

##### `resetAccessApprovalConfig` <a name="resetAccessApprovalConfig" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetAccessApprovalConfig"></a>

```java
public void resetAccessApprovalConfig()
```

##### `resetAccessGroups` <a name="resetAccessGroups" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetAccessGroups"></a>

```java
public void resetAccessGroups()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataplexDataProduct resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_data_product.GoogleDataplexDataProduct;

GoogleDataplexDataProduct.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_data_product.GoogleDataplexDataProduct;

GoogleDataplexDataProduct.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_data_product.GoogleDataplexDataProduct;

GoogleDataplexDataProduct.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_data_product.GoogleDataplexDataProduct;

GoogleDataplexDataProduct.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDataplexDataProduct.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleDataplexDataProduct resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDataplexDataProduct to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDataplexDataProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataplexDataProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.accessApprovalConfig">accessApprovalConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference">GoogleDataplexDataProductAccessApprovalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.accessGroups">accessGroups</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList">GoogleDataplexDataProductAccessGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.assetCount">assetCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference">GoogleDataplexDataProductTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.accessApprovalConfigInput">accessApprovalConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfig">GoogleDataplexDataProductAccessApprovalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.accessGroupsInput">accessGroupsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups">GoogleDataplexDataProductAccessGroups</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.dataProductIdInput">dataProductIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.ownerEmailsInput">ownerEmailsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts">GoogleDataplexDataProductTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.dataProductId">dataProductId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.ownerEmails">ownerEmails</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessApprovalConfig`<sup>Required</sup> <a name="accessApprovalConfig" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.accessApprovalConfig"></a>

```java
public GoogleDataplexDataProductAccessApprovalConfigOutputReference getAccessApprovalConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference">GoogleDataplexDataProductAccessApprovalConfigOutputReference</a>

---

##### `accessGroups`<sup>Required</sup> <a name="accessGroups" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.accessGroups"></a>

```java
public GoogleDataplexDataProductAccessGroupsList getAccessGroups();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList">GoogleDataplexDataProductAccessGroupsList</a>

---

##### `assetCount`<sup>Required</sup> <a name="assetCount" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.assetCount"></a>

```java
public java.lang.Number getAssetCount();
```

- *Type:* java.lang.Number

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.timeouts"></a>

```java
public GoogleDataplexDataProductTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference">GoogleDataplexDataProductTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `accessApprovalConfigInput`<sup>Optional</sup> <a name="accessApprovalConfigInput" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.accessApprovalConfigInput"></a>

```java
public GoogleDataplexDataProductAccessApprovalConfig getAccessApprovalConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfig">GoogleDataplexDataProductAccessApprovalConfig</a>

---

##### `accessGroupsInput`<sup>Optional</sup> <a name="accessGroupsInput" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.accessGroupsInput"></a>

```java
public IResolvable|java.util.List<GoogleDataplexDataProductAccessGroups> getAccessGroupsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups">GoogleDataplexDataProductAccessGroups</a>>

---

##### `dataProductIdInput`<sup>Optional</sup> <a name="dataProductIdInput" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.dataProductIdInput"></a>

```java
public java.lang.String getDataProductIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `ownerEmailsInput`<sup>Optional</sup> <a name="ownerEmailsInput" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.ownerEmailsInput"></a>

```java
public java.util.List<java.lang.String> getOwnerEmailsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.timeoutsInput"></a>

```java
public IResolvable|GoogleDataplexDataProductTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts">GoogleDataplexDataProductTimeouts</a>

---

##### `dataProductId`<sup>Required</sup> <a name="dataProductId" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.dataProductId"></a>

```java
public java.lang.String getDataProductId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `ownerEmails`<sup>Required</sup> <a name="ownerEmails" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.ownerEmails"></a>

```java
public java.util.List<java.lang.String> getOwnerEmails();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexDataProductAccessApprovalConfig <a name="GoogleDataplexDataProductAccessApprovalConfig" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_data_product.GoogleDataplexDataProductAccessApprovalConfig;

GoogleDataplexDataProductAccessApprovalConfig.builder()
//  .approverEmails(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfig.property.approverEmails">approverEmails</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the email addresses of users who are potential approvers. |

---

##### `approverEmails`<sup>Optional</sup> <a name="approverEmails" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfig.property.approverEmails"></a>

```java
public java.util.List<java.lang.String> getApproverEmails();
```

- *Type:* java.util.List<java.lang.String>

Specifies the email addresses of users who are potential approvers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#approver_emails GoogleDataplexDataProduct#approver_emails}

---

### GoogleDataplexDataProductAccessGroups <a name="GoogleDataplexDataProductAccessGroups" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_data_product.GoogleDataplexDataProductAccessGroups;

GoogleDataplexDataProductAccessGroups.builder()
    .displayName(java.lang.String)
    .groupId(java.lang.String)
    .id(java.lang.String)
    .principal(GoogleDataplexDataProductAccessGroupsPrincipal)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User friendly display name. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups.property.groupId">groupId</a></code> | <code>java.lang.String</code> | Unique identifier of the access group. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#id GoogleDataplexDataProduct#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipal">GoogleDataplexDataProductAccessGroupsPrincipal</a></code> | principal block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups.property.description">description</a></code> | <code>java.lang.String</code> | Description of the access group. |

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#display_name GoogleDataplexDataProduct#display_name}

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

Unique identifier of the access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#group_id GoogleDataplexDataProduct#group_id}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#id GoogleDataplexDataProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups.property.principal"></a>

```java
public GoogleDataplexDataProductAccessGroupsPrincipal getPrincipal();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipal">GoogleDataplexDataProductAccessGroupsPrincipal</a>

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#principal GoogleDataplexDataProduct#principal}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#description GoogleDataplexDataProduct#description}

---

### GoogleDataplexDataProductAccessGroupsPrincipal <a name="GoogleDataplexDataProductAccessGroupsPrincipal" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipal.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_data_product.GoogleDataplexDataProductAccessGroupsPrincipal;

GoogleDataplexDataProductAccessGroupsPrincipal.builder()
//  .googleGroup(java.lang.String)
//  .serviceAccount(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipal.property.googleGroup">googleGroup</a></code> | <code>java.lang.String</code> | Email of the Google Group. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipal.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Specifies the email of the producer service account. |

---

##### `googleGroup`<sup>Optional</sup> <a name="googleGroup" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipal.property.googleGroup"></a>

```java
public java.lang.String getGoogleGroup();
```

- *Type:* java.lang.String

Email of the Google Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#google_group GoogleDataplexDataProduct#google_group}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipal.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Specifies the email of the producer service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#service_account GoogleDataplexDataProduct#service_account}

---

### GoogleDataplexDataProductConfig <a name="GoogleDataplexDataProductConfig" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_data_product.GoogleDataplexDataProductConfig;

GoogleDataplexDataProductConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataProductId(java.lang.String)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .ownerEmails(java.util.List<java.lang.String>)
//  .accessApprovalConfig(GoogleDataplexDataProductAccessApprovalConfig)
//  .accessGroups(IResolvable|java.util.List<GoogleDataplexDataProductAccessGroups>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleDataplexDataProductTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.dataProductId">dataProductId</a></code> | <code>java.lang.String</code> | The ID of the data product. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User-friendly display name. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the data product. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.ownerEmails">ownerEmails</a></code> | <code>java.util.List<java.lang.String></code> | Emails of the owners. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.accessApprovalConfig">accessApprovalConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfig">GoogleDataplexDataProductAccessApprovalConfig</a></code> | access_approval_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.accessGroups">accessGroups</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups">GoogleDataplexDataProductAccessGroups</a>></code> | access_groups block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the data product. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#id GoogleDataplexDataProduct#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#project GoogleDataplexDataProduct#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts">GoogleDataplexDataProductTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataProductId`<sup>Required</sup> <a name="dataProductId" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.dataProductId"></a>

```java
public java.lang.String getDataProductId();
```

- *Type:* java.lang.String

The ID of the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#data_product_id GoogleDataplexDataProduct#data_product_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User-friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#display_name GoogleDataplexDataProduct#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#location GoogleDataplexDataProduct#location}

---

##### `ownerEmails`<sup>Required</sup> <a name="ownerEmails" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.ownerEmails"></a>

```java
public java.util.List<java.lang.String> getOwnerEmails();
```

- *Type:* java.util.List<java.lang.String>

Emails of the owners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#owner_emails GoogleDataplexDataProduct#owner_emails}

---

##### `accessApprovalConfig`<sup>Optional</sup> <a name="accessApprovalConfig" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.accessApprovalConfig"></a>

```java
public GoogleDataplexDataProductAccessApprovalConfig getAccessApprovalConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfig">GoogleDataplexDataProductAccessApprovalConfig</a>

access_approval_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#access_approval_config GoogleDataplexDataProduct#access_approval_config}

---

##### `accessGroups`<sup>Optional</sup> <a name="accessGroups" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.accessGroups"></a>

```java
public IResolvable|java.util.List<GoogleDataplexDataProductAccessGroups> getAccessGroups();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups">GoogleDataplexDataProductAccessGroups</a>>

access_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#access_groups GoogleDataplexDataProduct#access_groups}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#deletion_policy GoogleDataplexDataProduct#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#description GoogleDataplexDataProduct#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#id GoogleDataplexDataProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#labels GoogleDataplexDataProduct#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#project GoogleDataplexDataProduct#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.timeouts"></a>

```java
public GoogleDataplexDataProductTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts">GoogleDataplexDataProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#timeouts GoogleDataplexDataProduct#timeouts}

---

### GoogleDataplexDataProductTimeouts <a name="GoogleDataplexDataProductTimeouts" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_data_product.GoogleDataplexDataProductTimeouts;

GoogleDataplexDataProductTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#create GoogleDataplexDataProduct#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#delete GoogleDataplexDataProduct#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#update GoogleDataplexDataProduct#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#create GoogleDataplexDataProduct#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#delete GoogleDataplexDataProduct#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_data_product#update GoogleDataplexDataProduct#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexDataProductAccessApprovalConfigOutputReference <a name="GoogleDataplexDataProductAccessApprovalConfigOutputReference" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_data_product.GoogleDataplexDataProductAccessApprovalConfigOutputReference;

new GoogleDataplexDataProductAccessApprovalConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.resetApproverEmails">resetApproverEmails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApproverEmails` <a name="resetApproverEmails" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.resetApproverEmails"></a>

```java
public void resetApproverEmails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.property.approverEmailsInput">approverEmailsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.property.approverEmails">approverEmails</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfig">GoogleDataplexDataProductAccessApprovalConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `approverEmailsInput`<sup>Optional</sup> <a name="approverEmailsInput" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.property.approverEmailsInput"></a>

```java
public java.util.List<java.lang.String> getApproverEmailsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `approverEmails`<sup>Required</sup> <a name="approverEmails" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.property.approverEmails"></a>

```java
public java.util.List<java.lang.String> getApproverEmails();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataplexDataProductAccessApprovalConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfig">GoogleDataplexDataProductAccessApprovalConfig</a>

---


### GoogleDataplexDataProductAccessGroupsList <a name="GoogleDataplexDataProductAccessGroupsList" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_data_product.GoogleDataplexDataProductAccessGroupsList;

new GoogleDataplexDataProductAccessGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.get"></a>

```java
public GoogleDataplexDataProductAccessGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups">GoogleDataplexDataProductAccessGroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDataplexDataProductAccessGroups> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups">GoogleDataplexDataProductAccessGroups</a>>

---


### GoogleDataplexDataProductAccessGroupsOutputReference <a name="GoogleDataplexDataProductAccessGroupsOutputReference" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_data_product.GoogleDataplexDataProductAccessGroupsOutputReference;

new GoogleDataplexDataProductAccessGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.putPrincipal">putPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrincipal` <a name="putPrincipal" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.putPrincipal"></a>

```java
public void putPrincipal(GoogleDataplexDataProductAccessGroupsPrincipal value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.putPrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipal">GoogleDataplexDataProductAccessGroupsPrincipal</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference">GoogleDataplexDataProductAccessGroupsPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.principalInput">principalInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipal">GoogleDataplexDataProductAccessGroupsPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups">GoogleDataplexDataProductAccessGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.principal"></a>

```java
public GoogleDataplexDataProductAccessGroupsPrincipalOutputReference getPrincipal();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference">GoogleDataplexDataProductAccessGroupsPrincipalOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.principalInput"></a>

```java
public GoogleDataplexDataProductAccessGroupsPrincipal getPrincipalInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipal">GoogleDataplexDataProductAccessGroupsPrincipal</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDataplexDataProductAccessGroups getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups">GoogleDataplexDataProductAccessGroups</a>

---


### GoogleDataplexDataProductAccessGroupsPrincipalOutputReference <a name="GoogleDataplexDataProductAccessGroupsPrincipalOutputReference" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_data_product.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference;

new GoogleDataplexDataProductAccessGroupsPrincipalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.resetGoogleGroup">resetGoogleGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGoogleGroup` <a name="resetGoogleGroup" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.resetGoogleGroup"></a>

```java
public void resetGoogleGroup()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.googleGroupInput">googleGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.googleGroup">googleGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipal">GoogleDataplexDataProductAccessGroupsPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `googleGroupInput`<sup>Optional</sup> <a name="googleGroupInput" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.googleGroupInput"></a>

```java
public java.lang.String getGoogleGroupInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `googleGroup`<sup>Required</sup> <a name="googleGroup" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.googleGroup"></a>

```java
public java.lang.String getGoogleGroup();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.internalValue"></a>

```java
public GoogleDataplexDataProductAccessGroupsPrincipal getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipal">GoogleDataplexDataProductAccessGroupsPrincipal</a>

---


### GoogleDataplexDataProductTimeoutsOutputReference <a name="GoogleDataplexDataProductTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_data_product.GoogleDataplexDataProductTimeoutsOutputReference;

new GoogleDataplexDataProductTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts">GoogleDataplexDataProductTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDataplexDataProductTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts">GoogleDataplexDataProductTimeouts</a>

---



