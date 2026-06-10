# `googleOracleDatabaseGoldengateDeployment` Submodule <a name="`googleOracleDatabaseGoldengateDeployment` Submodule" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseGoldengateDeployment <a name="GoogleOracleDatabaseGoldengateDeployment" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment google_oracle_database_goldengate_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeployment;

GoogleOracleDatabaseGoldengateDeployment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .goldengateDeploymentId(java.lang.String)
    .location(java.lang.String)
    .odbSubnet(java.lang.String)
    .properties(GoogleOracleDatabaseGoldengateDeploymentProperties)
//  .deletionPolicy(java.lang.String)
//  .gcpOracleZone(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .odbNetwork(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleOracleDatabaseGoldengateDeploymentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.goldengateDeploymentId">goldengateDeploymentId</a></code> | <code>java.lang.String</code> | The ID of the GoldengateDeployment to create. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.odbSubnet">odbSubnet</a></code> | <code>java.lang.String</code> | The name of the OdbSubnet associated with the GoldengateDeployment for IP allocation. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties">GoogleOracleDatabaseGoldengateDeploymentProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.gcpOracleZone">gcpOracleZone</a></code> | <code>java.lang.String</code> | The GCP Oracle zone where Oracle GoldengateDeployment is hosted. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#id GoogleOracleDatabaseGoldengateDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels or tags associated with the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.odbNetwork">odbNetwork</a></code> | <code>java.lang.String</code> | The name of the OdbNetwork associated with the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#project GoogleOracleDatabaseGoldengateDeployment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts">GoogleOracleDatabaseGoldengateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name for the GoldengateDeployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#display_name GoogleOracleDatabaseGoldengateDeployment#display_name}

---

##### `goldengateDeploymentId`<sup>Required</sup> <a name="goldengateDeploymentId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.goldengateDeploymentId"></a>

- *Type:* java.lang.String

The ID of the GoldengateDeployment to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#goldengate_deployment_id GoogleOracleDatabaseGoldengateDeployment#goldengate_deployment_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#location GoogleOracleDatabaseGoldengateDeployment#location}

---

##### `odbSubnet`<sup>Required</sup> <a name="odbSubnet" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.odbSubnet"></a>

- *Type:* java.lang.String

The name of the OdbSubnet associated with the GoldengateDeployment for IP allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#odb_subnet GoogleOracleDatabaseGoldengateDeployment#odb_subnet}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties">GoogleOracleDatabaseGoldengateDeploymentProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#properties GoogleOracleDatabaseGoldengateDeployment#properties}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "PREVENT".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#deletion_policy GoogleOracleDatabaseGoldengateDeployment#deletion_policy}

---

##### `gcpOracleZone`<sup>Optional</sup> <a name="gcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.gcpOracleZone"></a>

- *Type:* java.lang.String

The GCP Oracle zone where Oracle GoldengateDeployment is hosted.

Example: us-east4-b-r2.
If not specified, the system will pick a zone based on availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#gcp_oracle_zone GoogleOracleDatabaseGoldengateDeployment#gcp_oracle_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#id GoogleOracleDatabaseGoldengateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels or tags associated with the GoldengateDeployment.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#labels GoogleOracleDatabaseGoldengateDeployment#labels}

---

##### `odbNetwork`<sup>Optional</sup> <a name="odbNetwork" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.odbNetwork"></a>

- *Type:* java.lang.String

The name of the OdbNetwork associated with the GoldengateDeployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#odb_network GoogleOracleDatabaseGoldengateDeployment#odb_network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#project GoogleOracleDatabaseGoldengateDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts">GoogleOracleDatabaseGoldengateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#timeouts GoogleOracleDatabaseGoldengateDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetGcpOracleZone">resetGcpOracleZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetOdbNetwork">resetOdbNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProperties` <a name="putProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.putProperties"></a>

```java
public void putProperties(GoogleOracleDatabaseGoldengateDeploymentProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties">GoogleOracleDatabaseGoldengateDeploymentProperties</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.putTimeouts"></a>

```java
public void putTimeouts(GoogleOracleDatabaseGoldengateDeploymentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts">GoogleOracleDatabaseGoldengateDeploymentTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetGcpOracleZone` <a name="resetGcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetGcpOracleZone"></a>

```java
public void resetGcpOracleZone()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetOdbNetwork` <a name="resetOdbNetwork" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetOdbNetwork"></a>

```java
public void resetOdbNetwork()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleOracleDatabaseGoldengateDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeployment;

GoogleOracleDatabaseGoldengateDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeployment;

GoogleOracleDatabaseGoldengateDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeployment;

GoogleOracleDatabaseGoldengateDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeployment;

GoogleOracleDatabaseGoldengateDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleOracleDatabaseGoldengateDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleOracleDatabaseGoldengateDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleOracleDatabaseGoldengateDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleOracleDatabaseGoldengateDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseGoldengateDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.entitlementId">entitlementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.ociUrl">ociUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference">GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.gcpOracleZoneInput">gcpOracleZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.goldengateDeploymentIdInput">goldengateDeploymentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.odbNetworkInput">odbNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.odbSubnetInput">odbSubnetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties">GoogleOracleDatabaseGoldengateDeploymentProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts">GoogleOracleDatabaseGoldengateDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.gcpOracleZone">gcpOracleZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.goldengateDeploymentId">goldengateDeploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.odbNetwork">odbNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.odbSubnet">odbSubnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.entitlementId"></a>

```java
public java.lang.String getEntitlementId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.ociUrl"></a>

```java
public java.lang.String getOciUrl();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.properties"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference getProperties();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.timeouts"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference">GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `gcpOracleZoneInput`<sup>Optional</sup> <a name="gcpOracleZoneInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.gcpOracleZoneInput"></a>

```java
public java.lang.String getGcpOracleZoneInput();
```

- *Type:* java.lang.String

---

##### `goldengateDeploymentIdInput`<sup>Optional</sup> <a name="goldengateDeploymentIdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.goldengateDeploymentIdInput"></a>

```java
public java.lang.String getGoldengateDeploymentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `odbNetworkInput`<sup>Optional</sup> <a name="odbNetworkInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.odbNetworkInput"></a>

```java
public java.lang.String getOdbNetworkInput();
```

- *Type:* java.lang.String

---

##### `odbSubnetInput`<sup>Optional</sup> <a name="odbSubnetInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.odbSubnetInput"></a>

```java
public java.lang.String getOdbSubnetInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.propertiesInput"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentProperties getPropertiesInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties">GoogleOracleDatabaseGoldengateDeploymentProperties</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.timeoutsInput"></a>

```java
public IResolvable|GoogleOracleDatabaseGoldengateDeploymentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts">GoogleOracleDatabaseGoldengateDeploymentTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `gcpOracleZone`<sup>Required</sup> <a name="gcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.gcpOracleZone"></a>

```java
public java.lang.String getGcpOracleZone();
```

- *Type:* java.lang.String

---

##### `goldengateDeploymentId`<sup>Required</sup> <a name="goldengateDeploymentId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.goldengateDeploymentId"></a>

```java
public java.lang.String getGoldengateDeploymentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `odbNetwork`<sup>Required</sup> <a name="odbNetwork" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.odbNetwork"></a>

```java
public java.lang.String getOdbNetwork();
```

- *Type:* java.lang.String

---

##### `odbSubnet`<sup>Required</sup> <a name="odbSubnet" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.odbSubnet"></a>

```java
public java.lang.String getOdbSubnet();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseGoldengateDeploymentConfig <a name="GoogleOracleDatabaseGoldengateDeploymentConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeploymentConfig;

GoogleOracleDatabaseGoldengateDeploymentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .goldengateDeploymentId(java.lang.String)
    .location(java.lang.String)
    .odbSubnet(java.lang.String)
    .properties(GoogleOracleDatabaseGoldengateDeploymentProperties)
//  .deletionPolicy(java.lang.String)
//  .gcpOracleZone(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .odbNetwork(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleOracleDatabaseGoldengateDeploymentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.goldengateDeploymentId">goldengateDeploymentId</a></code> | <code>java.lang.String</code> | The ID of the GoldengateDeployment to create. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.odbSubnet">odbSubnet</a></code> | <code>java.lang.String</code> | The name of the OdbSubnet associated with the GoldengateDeployment for IP allocation. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties">GoogleOracleDatabaseGoldengateDeploymentProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.gcpOracleZone">gcpOracleZone</a></code> | <code>java.lang.String</code> | The GCP Oracle zone where Oracle GoldengateDeployment is hosted. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#id GoogleOracleDatabaseGoldengateDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels or tags associated with the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.odbNetwork">odbNetwork</a></code> | <code>java.lang.String</code> | The name of the OdbNetwork associated with the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#project GoogleOracleDatabaseGoldengateDeployment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts">GoogleOracleDatabaseGoldengateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name for the GoldengateDeployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#display_name GoogleOracleDatabaseGoldengateDeployment#display_name}

---

##### `goldengateDeploymentId`<sup>Required</sup> <a name="goldengateDeploymentId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.goldengateDeploymentId"></a>

```java
public java.lang.String getGoldengateDeploymentId();
```

- *Type:* java.lang.String

The ID of the GoldengateDeployment to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#goldengate_deployment_id GoogleOracleDatabaseGoldengateDeployment#goldengate_deployment_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#location GoogleOracleDatabaseGoldengateDeployment#location}

---

##### `odbSubnet`<sup>Required</sup> <a name="odbSubnet" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.odbSubnet"></a>

```java
public java.lang.String getOdbSubnet();
```

- *Type:* java.lang.String

The name of the OdbSubnet associated with the GoldengateDeployment for IP allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#odb_subnet GoogleOracleDatabaseGoldengateDeployment#odb_subnet}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.properties"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentProperties getProperties();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties">GoogleOracleDatabaseGoldengateDeploymentProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#properties GoogleOracleDatabaseGoldengateDeployment#properties}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "PREVENT".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#deletion_policy GoogleOracleDatabaseGoldengateDeployment#deletion_policy}

---

##### `gcpOracleZone`<sup>Optional</sup> <a name="gcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.gcpOracleZone"></a>

```java
public java.lang.String getGcpOracleZone();
```

- *Type:* java.lang.String

The GCP Oracle zone where Oracle GoldengateDeployment is hosted.

Example: us-east4-b-r2.
If not specified, the system will pick a zone based on availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#gcp_oracle_zone GoogleOracleDatabaseGoldengateDeployment#gcp_oracle_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#id GoogleOracleDatabaseGoldengateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels or tags associated with the GoldengateDeployment.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#labels GoogleOracleDatabaseGoldengateDeployment#labels}

---

##### `odbNetwork`<sup>Optional</sup> <a name="odbNetwork" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.odbNetwork"></a>

```java
public java.lang.String getOdbNetwork();
```

- *Type:* java.lang.String

The name of the OdbNetwork associated with the GoldengateDeployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#odb_network GoogleOracleDatabaseGoldengateDeployment#odb_network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#project GoogleOracleDatabaseGoldengateDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.timeouts"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts">GoogleOracleDatabaseGoldengateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#timeouts GoogleOracleDatabaseGoldengateDeployment#timeouts}

---

### GoogleOracleDatabaseGoldengateDeploymentProperties <a name="GoogleOracleDatabaseGoldengateDeploymentProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeploymentProperties;

GoogleOracleDatabaseGoldengateDeploymentProperties.builder()
    .deploymentType(java.lang.String)
    .oggData(GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData)
//  .backupSchedule(GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule)
//  .cpuCoreCount(java.lang.Number)
//  .deploymentDiagnosticData(GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData)
//  .description(java.lang.String)
//  .environmentType(java.lang.String)
//  .isAutoScalingEnabled(java.lang.Boolean|IResolvable)
//  .licenseModel(java.lang.String)
//  .maintenanceConfig(GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig)
//  .maintenanceWindow(GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | A valid Goldengate Deployment type. For a list of supported types, use the 'ListGoldengateDeploymentTypes' operation. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.oggData">oggData</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData</a></code> | ogg_data block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.backupSchedule">backupSchedule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a></code> | backup_schedule block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | The Minimum number of OCPUs to be made available for this Deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.deploymentDiagnosticData">deploymentDiagnosticData</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a></code> | deployment_diagnostic_data block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.description">description</a></code> | <code>java.lang.String</code> | The description of the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.environmentType">environmentType</a></code> | <code>java.lang.String</code> | The environment type of the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates if auto scaling is enabled for the Deployment's CPU core count. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | The Oracle license model that applies to a Deployment. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.maintenanceConfig">maintenanceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a></code> | maintenance_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a></code> | maintenance_window block. |

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

A valid Goldengate Deployment type. For a list of supported types, use the 'ListGoldengateDeploymentTypes' operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#deployment_type GoogleOracleDatabaseGoldengateDeployment#deployment_type}

---

##### `oggData`<sup>Required</sup> <a name="oggData" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.oggData"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData getOggData();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData</a>

ogg_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#ogg_data GoogleOracleDatabaseGoldengateDeployment#ogg_data}

---

##### `backupSchedule`<sup>Optional</sup> <a name="backupSchedule" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.backupSchedule"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule getBackupSchedule();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a>

backup_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#backup_schedule GoogleOracleDatabaseGoldengateDeployment#backup_schedule}

---

##### `cpuCoreCount`<sup>Optional</sup> <a name="cpuCoreCount" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

The Minimum number of OCPUs to be made available for this Deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#cpu_core_count GoogleOracleDatabaseGoldengateDeployment#cpu_core_count}

---

##### `deploymentDiagnosticData`<sup>Optional</sup> <a name="deploymentDiagnosticData" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.deploymentDiagnosticData"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData getDeploymentDiagnosticData();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a>

deployment_diagnostic_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#deployment_diagnostic_data GoogleOracleDatabaseGoldengateDeployment#deployment_diagnostic_data}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the GoldengateDeployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#description GoogleOracleDatabaseGoldengateDeployment#description}

---

##### `environmentType`<sup>Optional</sup> <a name="environmentType" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.environmentType"></a>

```java
public java.lang.String getEnvironmentType();
```

- *Type:* java.lang.String

The environment type of the GoldengateDeployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#environment_type GoogleOracleDatabaseGoldengateDeployment#environment_type}

---

##### `isAutoScalingEnabled`<sup>Optional</sup> <a name="isAutoScalingEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.isAutoScalingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsAutoScalingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates if auto scaling is enabled for the Deployment's CPU core count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#is_auto_scaling_enabled GoogleOracleDatabaseGoldengateDeployment#is_auto_scaling_enabled}

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

The Oracle license model that applies to a Deployment. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#license_model GoogleOracleDatabaseGoldengateDeployment#license_model}

---

##### `maintenanceConfig`<sup>Optional</sup> <a name="maintenanceConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.maintenanceConfig"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig getMaintenanceConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a>

maintenance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#maintenance_config GoogleOracleDatabaseGoldengateDeployment#maintenance_config}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.maintenanceWindow"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow getMaintenanceWindow();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#maintenance_window GoogleOracleDatabaseGoldengateDeployment#maintenance_window}

---

### GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule;

GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule.builder()
    .build();
```


### GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData;

GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData.builder()
    .build();
```


### GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIps <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIps" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIps.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIps;

GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIps.builder()
    .build();
```


### GoogleOracleDatabaseGoldengateDeploymentPropertiesLocks <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesLocks" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocks.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocks;

GoogleOracleDatabaseGoldengateDeploymentPropertiesLocks.builder()
    .build();
```


### GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig;

GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.builder()
//  .bundleReleaseUpgradePeriodDays(java.lang.Number)
//  .interimReleaseUpgradePeriodDays(java.lang.Number)
//  .isInterimReleaseAutoUpgradeEnabled(java.lang.Boolean|IResolvable)
//  .majorReleaseUpgradePeriodDays(java.lang.Number)
//  .securityPatchUpgradePeriodDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.bundleReleaseUpgradePeriodDays">bundleReleaseUpgradePeriodDays</a></code> | <code>java.lang.Number</code> | Defines auto upgrade period for bundle releases. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.interimReleaseUpgradePeriodDays">interimReleaseUpgradePeriodDays</a></code> | <code>java.lang.Number</code> | Defines auto upgrade period for interim releases. This period must be shorter or equal to bundle release upgrade period. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.isInterimReleaseAutoUpgradeEnabled">isInterimReleaseAutoUpgradeEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | By default auto upgrade for interim releases are not enabled. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.majorReleaseUpgradePeriodDays">majorReleaseUpgradePeriodDays</a></code> | <code>java.lang.Number</code> | Defines auto upgrade period for major releases. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.securityPatchUpgradePeriodDays">securityPatchUpgradePeriodDays</a></code> | <code>java.lang.Number</code> | Defines auto upgrade period for releases with security fix. |

---

##### `bundleReleaseUpgradePeriodDays`<sup>Optional</sup> <a name="bundleReleaseUpgradePeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.bundleReleaseUpgradePeriodDays"></a>

```java
public java.lang.Number getBundleReleaseUpgradePeriodDays();
```

- *Type:* java.lang.Number

Defines auto upgrade period for bundle releases.

Manually configured period
cannot be longer than service defined period for bundle releases. This
period must be shorter or equal to major release upgrade period. Not
passing this field during create will equate to using the service default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#bundle_release_upgrade_period_days GoogleOracleDatabaseGoldengateDeployment#bundle_release_upgrade_period_days}

---

##### `interimReleaseUpgradePeriodDays`<sup>Optional</sup> <a name="interimReleaseUpgradePeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.interimReleaseUpgradePeriodDays"></a>

```java
public java.lang.Number getInterimReleaseUpgradePeriodDays();
```

- *Type:* java.lang.Number

Defines auto upgrade period for interim releases. This period must be shorter or equal to bundle release upgrade period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#interim_release_upgrade_period_days GoogleOracleDatabaseGoldengateDeployment#interim_release_upgrade_period_days}

---

##### `isInterimReleaseAutoUpgradeEnabled`<sup>Optional</sup> <a name="isInterimReleaseAutoUpgradeEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.isInterimReleaseAutoUpgradeEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsInterimReleaseAutoUpgradeEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

By default auto upgrade for interim releases are not enabled.

If
auto-upgrade is enabled for interim release,  you have to specify
interim_release_upgrade_period_days too.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#is_interim_release_auto_upgrade_enabled GoogleOracleDatabaseGoldengateDeployment#is_interim_release_auto_upgrade_enabled}

---

##### `majorReleaseUpgradePeriodDays`<sup>Optional</sup> <a name="majorReleaseUpgradePeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.majorReleaseUpgradePeriodDays"></a>

```java
public java.lang.Number getMajorReleaseUpgradePeriodDays();
```

- *Type:* java.lang.Number

Defines auto upgrade period for major releases.

Manually configured period
cannot be longer than service defined period for major releases. Not
passing this field during create will equate to using the service default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#major_release_upgrade_period_days GoogleOracleDatabaseGoldengateDeployment#major_release_upgrade_period_days}

---

##### `securityPatchUpgradePeriodDays`<sup>Optional</sup> <a name="securityPatchUpgradePeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.securityPatchUpgradePeriodDays"></a>

```java
public java.lang.Number getSecurityPatchUpgradePeriodDays();
```

- *Type:* java.lang.Number

Defines auto upgrade period for releases with security fix.

Manually
configured period cannot be longer than service defined period for security
releases. Not passing this field during create will equate to using the
service default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#security_patch_upgrade_period_days GoogleOracleDatabaseGoldengateDeployment#security_patch_upgrade_period_days}

---

### GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow;

GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow.builder()
    .day(java.lang.String)
    .startHour(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow.property.day">day</a></code> | <code>java.lang.String</code> | Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow.property.startHour">startHour</a></code> | <code>java.lang.Number</code> | Start hour for maintenance period. Hour is in UTC. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#day GoogleOracleDatabaseGoldengateDeployment#day}

---

##### `startHour`<sup>Required</sup> <a name="startHour" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow.property.startHour"></a>

```java
public java.lang.Number getStartHour();
```

- *Type:* java.lang.Number

Start hour for maintenance period. Hour is in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#start_hour GoogleOracleDatabaseGoldengateDeployment#start_hour}

---

### GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData;

GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData.builder()
    .adminUsername(java.lang.String)
    .deployment(java.lang.String)
//  .adminPassword(java.lang.String)
//  .adminPasswordSecretVersion(java.lang.String)
//  .groupRolesMapping(GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping)
//  .oggVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | The Goldengate deployment console username. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData.property.deployment">deployment</a></code> | <code>java.lang.String</code> | The name given to the Goldengate service deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | The Goldengate deployment console password in plain text. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData.property.adminPasswordSecretVersion">adminPasswordSecretVersion</a></code> | <code>java.lang.String</code> | Input only. The Goldengate deployment console password secret version. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData.property.groupRolesMapping">groupRolesMapping</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a></code> | group_roles_mapping block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData.property.oggVersion">oggVersion</a></code> | <code>java.lang.String</code> | Version of OGG. |

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

The Goldengate deployment console username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#admin_username GoogleOracleDatabaseGoldengateDeployment#admin_username}

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData.property.deployment"></a>

```java
public java.lang.String getDeployment();
```

- *Type:* java.lang.String

The name given to the Goldengate service deployment.

The name must be 1 to
32 characters long, must contain only alphanumeric characters and must
start with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#deployment GoogleOracleDatabaseGoldengateDeployment#deployment}

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

The Goldengate deployment console password in plain text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#admin_password GoogleOracleDatabaseGoldengateDeployment#admin_password}

---

##### `adminPasswordSecretVersion`<sup>Optional</sup> <a name="adminPasswordSecretVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData.property.adminPasswordSecretVersion"></a>

```java
public java.lang.String getAdminPasswordSecretVersion();
```

- *Type:* java.lang.String

Input only. The Goldengate deployment console password secret version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#admin_password_secret_version GoogleOracleDatabaseGoldengateDeployment#admin_password_secret_version}

---

##### `groupRolesMapping`<sup>Optional</sup> <a name="groupRolesMapping" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData.property.groupRolesMapping"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping getGroupRolesMapping();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a>

group_roles_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#group_roles_mapping GoogleOracleDatabaseGoldengateDeployment#group_roles_mapping}

---

##### `oggVersion`<sup>Optional</sup> <a name="oggVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData.property.oggVersion"></a>

```java
public java.lang.String getOggVersion();
```

- *Type:* java.lang.String

Version of OGG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#ogg_version GoogleOracleDatabaseGoldengateDeployment#ogg_version}

---

### GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping;

GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping.builder()
    .build();
```


### GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacements <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacements" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacements.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacements;

GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacements.builder()
    .build();
```


### GoogleOracleDatabaseGoldengateDeploymentTimeouts <a name="GoogleOracleDatabaseGoldengateDeploymentTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts;

GoogleOracleDatabaseGoldengateDeploymentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#create GoogleOracleDatabaseGoldengateDeployment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#delete GoogleOracleDatabaseGoldengateDeployment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#update GoogleOracleDatabaseGoldengateDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#create GoogleOracleDatabaseGoldengateDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#delete GoogleOracleDatabaseGoldengateDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_goldengate_deployment#update GoogleOracleDatabaseGoldengateDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.backupScheduledTime">backupScheduledTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.frequencyBackupScheduled">frequencyBackupScheduled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.metadataOnly">metadataOnly</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupScheduledTime`<sup>Required</sup> <a name="backupScheduledTime" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.backupScheduledTime"></a>

```java
public java.lang.String getBackupScheduledTime();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `frequencyBackupScheduled`<sup>Required</sup> <a name="frequencyBackupScheduled" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.frequencyBackupScheduled"></a>

```java
public java.lang.String getFrequencyBackupScheduled();
```

- *Type:* java.lang.String

---

##### `metadataOnly`<sup>Required</sup> <a name="metadataOnly" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.metadataOnly"></a>

```java
public IResolvable getMetadataOnly();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a>

---


### GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.diagnosticEndTime">diagnosticEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.diagnosticStartTime">diagnosticStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.diagnosticState">diagnosticState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `diagnosticEndTime`<sup>Required</sup> <a name="diagnosticEndTime" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.diagnosticEndTime"></a>

```java
public java.lang.String getDiagnosticEndTime();
```

- *Type:* java.lang.String

---

##### `diagnosticStartTime`<sup>Required</sup> <a name="diagnosticStartTime" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.diagnosticStartTime"></a>

```java
public java.lang.String getDiagnosticStartTime();
```

- *Type:* java.lang.String

---

##### `diagnosticState`<sup>Required</sup> <a name="diagnosticState" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.diagnosticState"></a>

```java
public java.lang.String getDiagnosticState();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a>

---


### GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.get"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.ingressIpAddress">ingressIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIps">GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ingressIpAddress`<sup>Required</sup> <a name="ingressIpAddress" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.ingressIpAddress"></a>

```java
public java.lang.String getIngressIpAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIps getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIps">GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIps</a>

---


### GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.get"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocks">GoogleOracleDatabaseGoldengateDeploymentPropertiesLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.relatedResourceId"></a>

```java
public java.lang.String getRelatedResourceId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesLocks getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocks">GoogleOracleDatabaseGoldengateDeploymentPropertiesLocks</a>

---


### GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetBundleReleaseUpgradePeriodDays">resetBundleReleaseUpgradePeriodDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetInterimReleaseUpgradePeriodDays">resetInterimReleaseUpgradePeriodDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetIsInterimReleaseAutoUpgradeEnabled">resetIsInterimReleaseAutoUpgradeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetMajorReleaseUpgradePeriodDays">resetMajorReleaseUpgradePeriodDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetSecurityPatchUpgradePeriodDays">resetSecurityPatchUpgradePeriodDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBundleReleaseUpgradePeriodDays` <a name="resetBundleReleaseUpgradePeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetBundleReleaseUpgradePeriodDays"></a>

```java
public void resetBundleReleaseUpgradePeriodDays()
```

##### `resetInterimReleaseUpgradePeriodDays` <a name="resetInterimReleaseUpgradePeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetInterimReleaseUpgradePeriodDays"></a>

```java
public void resetInterimReleaseUpgradePeriodDays()
```

##### `resetIsInterimReleaseAutoUpgradeEnabled` <a name="resetIsInterimReleaseAutoUpgradeEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetIsInterimReleaseAutoUpgradeEnabled"></a>

```java
public void resetIsInterimReleaseAutoUpgradeEnabled()
```

##### `resetMajorReleaseUpgradePeriodDays` <a name="resetMajorReleaseUpgradePeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetMajorReleaseUpgradePeriodDays"></a>

```java
public void resetMajorReleaseUpgradePeriodDays()
```

##### `resetSecurityPatchUpgradePeriodDays` <a name="resetSecurityPatchUpgradePeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetSecurityPatchUpgradePeriodDays"></a>

```java
public void resetSecurityPatchUpgradePeriodDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.bundleReleaseUpgradePeriodDaysInput">bundleReleaseUpgradePeriodDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.interimReleaseUpgradePeriodDaysInput">interimReleaseUpgradePeriodDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.isInterimReleaseAutoUpgradeEnabledInput">isInterimReleaseAutoUpgradeEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.majorReleaseUpgradePeriodDaysInput">majorReleaseUpgradePeriodDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.securityPatchUpgradePeriodDaysInput">securityPatchUpgradePeriodDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.bundleReleaseUpgradePeriodDays">bundleReleaseUpgradePeriodDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.interimReleaseUpgradePeriodDays">interimReleaseUpgradePeriodDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.isInterimReleaseAutoUpgradeEnabled">isInterimReleaseAutoUpgradeEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.majorReleaseUpgradePeriodDays">majorReleaseUpgradePeriodDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.securityPatchUpgradePeriodDays">securityPatchUpgradePeriodDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bundleReleaseUpgradePeriodDaysInput`<sup>Optional</sup> <a name="bundleReleaseUpgradePeriodDaysInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.bundleReleaseUpgradePeriodDaysInput"></a>

```java
public java.lang.Number getBundleReleaseUpgradePeriodDaysInput();
```

- *Type:* java.lang.Number

---

##### `interimReleaseUpgradePeriodDaysInput`<sup>Optional</sup> <a name="interimReleaseUpgradePeriodDaysInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.interimReleaseUpgradePeriodDaysInput"></a>

```java
public java.lang.Number getInterimReleaseUpgradePeriodDaysInput();
```

- *Type:* java.lang.Number

---

##### `isInterimReleaseAutoUpgradeEnabledInput`<sup>Optional</sup> <a name="isInterimReleaseAutoUpgradeEnabledInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.isInterimReleaseAutoUpgradeEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsInterimReleaseAutoUpgradeEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `majorReleaseUpgradePeriodDaysInput`<sup>Optional</sup> <a name="majorReleaseUpgradePeriodDaysInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.majorReleaseUpgradePeriodDaysInput"></a>

```java
public java.lang.Number getMajorReleaseUpgradePeriodDaysInput();
```

- *Type:* java.lang.Number

---

##### `securityPatchUpgradePeriodDaysInput`<sup>Optional</sup> <a name="securityPatchUpgradePeriodDaysInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.securityPatchUpgradePeriodDaysInput"></a>

```java
public java.lang.Number getSecurityPatchUpgradePeriodDaysInput();
```

- *Type:* java.lang.Number

---

##### `bundleReleaseUpgradePeriodDays`<sup>Required</sup> <a name="bundleReleaseUpgradePeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.bundleReleaseUpgradePeriodDays"></a>

```java
public java.lang.Number getBundleReleaseUpgradePeriodDays();
```

- *Type:* java.lang.Number

---

##### `interimReleaseUpgradePeriodDays`<sup>Required</sup> <a name="interimReleaseUpgradePeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.interimReleaseUpgradePeriodDays"></a>

```java
public java.lang.Number getInterimReleaseUpgradePeriodDays();
```

- *Type:* java.lang.Number

---

##### `isInterimReleaseAutoUpgradeEnabled`<sup>Required</sup> <a name="isInterimReleaseAutoUpgradeEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.isInterimReleaseAutoUpgradeEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsInterimReleaseAutoUpgradeEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `majorReleaseUpgradePeriodDays`<sup>Required</sup> <a name="majorReleaseUpgradePeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.majorReleaseUpgradePeriodDays"></a>

```java
public java.lang.Number getMajorReleaseUpgradePeriodDays();
```

- *Type:* java.lang.Number

---

##### `securityPatchUpgradePeriodDays`<sup>Required</sup> <a name="securityPatchUpgradePeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.securityPatchUpgradePeriodDays"></a>

```java
public java.lang.Number getSecurityPatchUpgradePeriodDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a>

---


### GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.startHourInput">startHourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.day">day</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.startHour">startHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.dayInput"></a>

```java
public java.lang.String getDayInput();
```

- *Type:* java.lang.String

---

##### `startHourInput`<sup>Optional</sup> <a name="startHourInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.startHourInput"></a>

```java
public java.lang.Number getStartHourInput();
```

- *Type:* java.lang.Number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

---

##### `startHour`<sup>Required</sup> <a name="startHour" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.startHour"></a>

```java
public java.lang.Number getStartHour();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a>

---


### GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.administratorGroupId">administratorGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.operatorGroupId">operatorGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.userGroupId">userGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `administratorGroupId`<sup>Required</sup> <a name="administratorGroupId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.administratorGroupId"></a>

```java
public java.lang.String getAdministratorGroupId();
```

- *Type:* java.lang.String

---

##### `operatorGroupId`<sup>Required</sup> <a name="operatorGroupId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.operatorGroupId"></a>

```java
public java.lang.String getOperatorGroupId();
```

- *Type:* java.lang.String

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `userGroupId`<sup>Required</sup> <a name="userGroupId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.userGroupId"></a>

```java
public java.lang.String getUserGroupId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a>

---


### GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.putGroupRolesMapping">putGroupRolesMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetAdminPassword">resetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetAdminPasswordSecretVersion">resetAdminPasswordSecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetGroupRolesMapping">resetGroupRolesMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetOggVersion">resetOggVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGroupRolesMapping` <a name="putGroupRolesMapping" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.putGroupRolesMapping"></a>

```java
public void putGroupRolesMapping(GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.putGroupRolesMapping.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a>

---

##### `resetAdminPassword` <a name="resetAdminPassword" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetAdminPassword"></a>

```java
public void resetAdminPassword()
```

##### `resetAdminPasswordSecretVersion` <a name="resetAdminPasswordSecretVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetAdminPasswordSecretVersion"></a>

```java
public void resetAdminPasswordSecretVersion()
```

##### `resetGroupRolesMapping` <a name="resetGroupRolesMapping" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetGroupRolesMapping"></a>

```java
public void resetGroupRolesMapping()
```

##### `resetOggVersion` <a name="resetOggVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetOggVersion"></a>

```java
public void resetOggVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.credentialStore">credentialStore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.groupRolesMapping">groupRolesMapping</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.identityDomainId">identityDomainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPasswordInput">adminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPasswordSecretVersionInput">adminPasswordSecretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminUsernameInput">adminUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.deploymentInput">deploymentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.groupRolesMappingInput">groupRolesMappingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.oggVersionInput">oggVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPasswordSecretVersion">adminPasswordSecretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.deployment">deployment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.oggVersion">oggVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `credentialStore`<sup>Required</sup> <a name="credentialStore" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.credentialStore"></a>

```java
public java.lang.String getCredentialStore();
```

- *Type:* java.lang.String

---

##### `groupRolesMapping`<sup>Required</sup> <a name="groupRolesMapping" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.groupRolesMapping"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference getGroupRolesMapping();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference</a>

---

##### `identityDomainId`<sup>Required</sup> <a name="identityDomainId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.identityDomainId"></a>

```java
public java.lang.String getIdentityDomainId();
```

- *Type:* java.lang.String

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.passwordSecretId"></a>

```java
public java.lang.String getPasswordSecretId();
```

- *Type:* java.lang.String

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPasswordInput"></a>

```java
public java.lang.String getAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `adminPasswordSecretVersionInput`<sup>Optional</sup> <a name="adminPasswordSecretVersionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPasswordSecretVersionInput"></a>

```java
public java.lang.String getAdminPasswordSecretVersionInput();
```

- *Type:* java.lang.String

---

##### `adminUsernameInput`<sup>Optional</sup> <a name="adminUsernameInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminUsernameInput"></a>

```java
public java.lang.String getAdminUsernameInput();
```

- *Type:* java.lang.String

---

##### `deploymentInput`<sup>Optional</sup> <a name="deploymentInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.deploymentInput"></a>

```java
public java.lang.String getDeploymentInput();
```

- *Type:* java.lang.String

---

##### `groupRolesMappingInput`<sup>Optional</sup> <a name="groupRolesMappingInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.groupRolesMappingInput"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping getGroupRolesMappingInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a>

---

##### `oggVersionInput`<sup>Optional</sup> <a name="oggVersionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.oggVersionInput"></a>

```java
public java.lang.String getOggVersionInput();
```

- *Type:* java.lang.String

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### `adminPasswordSecretVersion`<sup>Required</sup> <a name="adminPasswordSecretVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPasswordSecretVersion"></a>

```java
public java.lang.String getAdminPasswordSecretVersion();
```

- *Type:* java.lang.String

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.deployment"></a>

```java
public java.lang.String getDeployment();
```

- *Type:* java.lang.String

---

##### `oggVersion`<sup>Required</sup> <a name="oggVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.oggVersion"></a>

```java
public java.lang.String getOggVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData</a>

---


### GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putBackupSchedule">putBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putDeploymentDiagnosticData">putDeploymentDiagnosticData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceConfig">putMaintenanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putOggData">putOggData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetBackupSchedule">resetBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetCpuCoreCount">resetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetDeploymentDiagnosticData">resetDeploymentDiagnosticData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetEnvironmentType">resetEnvironmentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetIsAutoScalingEnabled">resetIsAutoScalingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetMaintenanceConfig">resetMaintenanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackupSchedule` <a name="putBackupSchedule" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putBackupSchedule"></a>

```java
public void putBackupSchedule(GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putBackupSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a>

---

##### `putDeploymentDiagnosticData` <a name="putDeploymentDiagnosticData" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putDeploymentDiagnosticData"></a>

```java
public void putDeploymentDiagnosticData(GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putDeploymentDiagnosticData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a>

---

##### `putMaintenanceConfig` <a name="putMaintenanceConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceConfig"></a>

```java
public void putMaintenanceConfig(GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceWindow"></a>

```java
public void putMaintenanceWindow(GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a>

---

##### `putOggData` <a name="putOggData" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putOggData"></a>

```java
public void putOggData(GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putOggData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData</a>

---

##### `resetBackupSchedule` <a name="resetBackupSchedule" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetBackupSchedule"></a>

```java
public void resetBackupSchedule()
```

##### `resetCpuCoreCount` <a name="resetCpuCoreCount" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetCpuCoreCount"></a>

```java
public void resetCpuCoreCount()
```

##### `resetDeploymentDiagnosticData` <a name="resetDeploymentDiagnosticData" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetDeploymentDiagnosticData"></a>

```java
public void resetDeploymentDiagnosticData()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnvironmentType` <a name="resetEnvironmentType" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetEnvironmentType"></a>

```java
public void resetEnvironmentType()
```

##### `resetIsAutoScalingEnabled` <a name="resetIsAutoScalingEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetIsAutoScalingEnabled"></a>

```java
public void resetIsAutoScalingEnabled()
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetLicenseModel"></a>

```java
public void resetLicenseModel()
```

##### `resetMaintenanceConfig` <a name="resetMaintenanceConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetMaintenanceConfig"></a>

```java
public void resetMaintenanceConfig()
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.backupSchedule">backupSchedule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentBackupId">deploymentBackupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentDiagnosticData">deploymentDiagnosticData</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentRole">deploymentRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentUrl">deploymentUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.healthy">healthy</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.ingressIps">ingressIps</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList">GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isLatestVersion">isLatestVersion</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isPublic">isPublic</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isStorageUtilizationLimitExceeded">isStorageUtilizationLimitExceeded</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lastBackupScheduleTime">lastBackupScheduleTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lifecycleSubState">lifecycleSubState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.loadBalancerSubnetId">loadBalancerSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.locks">locks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList">GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceConfig">maintenanceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextBackupScheduleTime">nextBackupScheduleTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextMaintenanceActionType">nextMaintenanceActionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextMaintenanceDescription">nextMaintenanceDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextMaintenanceTime">nextMaintenanceTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.oggData">oggData</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.oggVersionSupportEndTime">oggVersionSupportEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.placements">placements</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList">GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.publicIpAddress">publicIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.roleChangeTime">roleChangeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.storageUtilizationBytes">storageUtilizationBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.upgradeRequiredTime">upgradeRequiredTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.backupScheduleInput">backupScheduleInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.cpuCoreCountInput">cpuCoreCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentDiagnosticDataInput">deploymentDiagnosticDataInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.environmentTypeInput">environmentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isAutoScalingEnabledInput">isAutoScalingEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.licenseModelInput">licenseModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceConfigInput">maintenanceConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.oggDataInput">oggDataInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.environmentType">environmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties">GoogleOracleDatabaseGoldengateDeploymentProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupSchedule`<sup>Required</sup> <a name="backupSchedule" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.backupSchedule"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference getBackupSchedule();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference</a>

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `deploymentBackupId`<sup>Required</sup> <a name="deploymentBackupId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentBackupId"></a>

```java
public java.lang.String getDeploymentBackupId();
```

- *Type:* java.lang.String

---

##### `deploymentDiagnosticData`<sup>Required</sup> <a name="deploymentDiagnosticData" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentDiagnosticData"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference getDeploymentDiagnosticData();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference</a>

---

##### `deploymentRole`<sup>Required</sup> <a name="deploymentRole" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentRole"></a>

```java
public java.lang.String getDeploymentRole();
```

- *Type:* java.lang.String

---

##### `deploymentUrl`<sup>Required</sup> <a name="deploymentUrl" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentUrl"></a>

```java
public java.lang.String getDeploymentUrl();
```

- *Type:* java.lang.String

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `healthy`<sup>Required</sup> <a name="healthy" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.healthy"></a>

```java
public IResolvable getHealthy();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `ingressIps`<sup>Required</sup> <a name="ingressIps" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.ingressIps"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList getIngressIps();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList">GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList</a>

---

##### `isLatestVersion`<sup>Required</sup> <a name="isLatestVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isLatestVersion"></a>

```java
public IResolvable getIsLatestVersion();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isPublic"></a>

```java
public IResolvable getIsPublic();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `isStorageUtilizationLimitExceeded`<sup>Required</sup> <a name="isStorageUtilizationLimitExceeded" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isStorageUtilizationLimitExceeded"></a>

```java
public IResolvable getIsStorageUtilizationLimitExceeded();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `lastBackupScheduleTime`<sup>Required</sup> <a name="lastBackupScheduleTime" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lastBackupScheduleTime"></a>

```java
public java.lang.String getLastBackupScheduleTime();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lifecycleState"></a>

```java
public java.lang.String getLifecycleState();
```

- *Type:* java.lang.String

---

##### `lifecycleSubState`<sup>Required</sup> <a name="lifecycleSubState" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lifecycleSubState"></a>

```java
public java.lang.String getLifecycleSubState();
```

- *Type:* java.lang.String

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

---

##### `loadBalancerSubnetId`<sup>Required</sup> <a name="loadBalancerSubnetId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.loadBalancerSubnetId"></a>

```java
public java.lang.String getLoadBalancerSubnetId();
```

- *Type:* java.lang.String

---

##### `locks`<sup>Required</sup> <a name="locks" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.locks"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList getLocks();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList">GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList</a>

---

##### `maintenanceConfig`<sup>Required</sup> <a name="maintenanceConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceConfig"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference getMaintenanceConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference</a>

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceWindow"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference getMaintenanceWindow();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference</a>

---

##### `nextBackupScheduleTime`<sup>Required</sup> <a name="nextBackupScheduleTime" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextBackupScheduleTime"></a>

```java
public java.lang.String getNextBackupScheduleTime();
```

- *Type:* java.lang.String

---

##### `nextMaintenanceActionType`<sup>Required</sup> <a name="nextMaintenanceActionType" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextMaintenanceActionType"></a>

```java
public java.lang.String getNextMaintenanceActionType();
```

- *Type:* java.lang.String

---

##### `nextMaintenanceDescription`<sup>Required</sup> <a name="nextMaintenanceDescription" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextMaintenanceDescription"></a>

```java
public java.lang.String getNextMaintenanceDescription();
```

- *Type:* java.lang.String

---

##### `nextMaintenanceTime`<sup>Required</sup> <a name="nextMaintenanceTime" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextMaintenanceTime"></a>

```java
public java.lang.String getNextMaintenanceTime();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `oggData`<sup>Required</sup> <a name="oggData" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.oggData"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference getOggData();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference</a>

---

##### `oggVersionSupportEndTime`<sup>Required</sup> <a name="oggVersionSupportEndTime" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.oggVersionSupportEndTime"></a>

```java
public java.lang.String getOggVersionSupportEndTime();
```

- *Type:* java.lang.String

---

##### `placements`<sup>Required</sup> <a name="placements" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.placements"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList getPlacements();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList">GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList</a>

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.publicIpAddress"></a>

```java
public java.lang.String getPublicIpAddress();
```

- *Type:* java.lang.String

---

##### `roleChangeTime`<sup>Required</sup> <a name="roleChangeTime" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.roleChangeTime"></a>

```java
public java.lang.String getRoleChangeTime();
```

- *Type:* java.lang.String

---

##### `storageUtilizationBytes`<sup>Required</sup> <a name="storageUtilizationBytes" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.storageUtilizationBytes"></a>

```java
public java.lang.String getStorageUtilizationBytes();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `upgradeRequiredTime`<sup>Required</sup> <a name="upgradeRequiredTime" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.upgradeRequiredTime"></a>

```java
public java.lang.String getUpgradeRequiredTime();
```

- *Type:* java.lang.String

---

##### `backupScheduleInput`<sup>Optional</sup> <a name="backupScheduleInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.backupScheduleInput"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule getBackupScheduleInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a>

---

##### `cpuCoreCountInput`<sup>Optional</sup> <a name="cpuCoreCountInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.cpuCoreCountInput"></a>

```java
public java.lang.Number getCpuCoreCountInput();
```

- *Type:* java.lang.Number

---

##### `deploymentDiagnosticDataInput`<sup>Optional</sup> <a name="deploymentDiagnosticDataInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentDiagnosticDataInput"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData getDeploymentDiagnosticDataInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a>

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentTypeInput"></a>

```java
public java.lang.String getDeploymentTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `environmentTypeInput`<sup>Optional</sup> <a name="environmentTypeInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.environmentTypeInput"></a>

```java
public java.lang.String getEnvironmentTypeInput();
```

- *Type:* java.lang.String

---

##### `isAutoScalingEnabledInput`<sup>Optional</sup> <a name="isAutoScalingEnabledInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isAutoScalingEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsAutoScalingEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.licenseModelInput"></a>

```java
public java.lang.String getLicenseModelInput();
```

- *Type:* java.lang.String

---

##### `maintenanceConfigInput`<sup>Optional</sup> <a name="maintenanceConfigInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceConfigInput"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig getMaintenanceConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a>

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceWindowInput"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow getMaintenanceWindowInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a>

---

##### `oggDataInput`<sup>Optional</sup> <a name="oggDataInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.oggDataInput"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData getOggDataInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData</a>

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `environmentType`<sup>Required</sup> <a name="environmentType" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.environmentType"></a>

```java
public java.lang.String getEnvironmentType();
```

- *Type:* java.lang.String

---

##### `isAutoScalingEnabled`<sup>Required</sup> <a name="isAutoScalingEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isAutoScalingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsAutoScalingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties">GoogleOracleDatabaseGoldengateDeploymentProperties</a>

---


### GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.get"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.faultDomain">faultDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacements">GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.faultDomain"></a>

```java
public java.lang.String getFaultDomain();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacements getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacements">GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacements</a>

---


### GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference <a name="GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_deployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference;

new GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts">GoogleOracleDatabaseGoldengateDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleOracleDatabaseGoldengateDeploymentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts">GoogleOracleDatabaseGoldengateDeploymentTimeouts</a>

---



