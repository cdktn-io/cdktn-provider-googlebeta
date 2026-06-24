# `googleOracleDatabaseExadbVmCluster` Submodule <a name="`googleOracleDatabaseExadbVmCluster` Submodule" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseExadbVmCluster <a name="GoogleOracleDatabaseExadbVmCluster" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster google_oracle_database_exadb_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exadb_vm_cluster.GoogleOracleDatabaseExadbVmCluster;

GoogleOracleDatabaseExadbVmCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backupOdbSubnet(java.lang.String)
    .displayName(java.lang.String)
    .exadbVmClusterId(java.lang.String)
    .location(java.lang.String)
    .odbSubnet(java.lang.String)
    .properties(GoogleOracleDatabaseExadbVmClusterProperties)
//  .deletionPolicy(java.lang.String)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .odbNetwork(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleOracleDatabaseExadbVmClusterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.backupOdbSubnet">backupOdbSubnet</a></code> | <code>java.lang.String</code> | The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.exadbVmClusterId">exadbVmClusterId</a></code> | <code>java.lang.String</code> | The ID of the ExadbVmCluster to create. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.odbSubnet">odbSubnet</a></code> | <code>java.lang.String</code> | The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties">GoogleOracleDatabaseExadbVmClusterProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#id GoogleOracleDatabaseExadbVmCluster#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels or tags associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.odbNetwork">odbNetwork</a></code> | <code>java.lang.String</code> | The name of the OdbNetwork associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#project GoogleOracleDatabaseExadbVmCluster#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts">GoogleOracleDatabaseExadbVmClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backupOdbSubnet`<sup>Required</sup> <a name="backupOdbSubnet" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.backupOdbSubnet"></a>

- *Type:* java.lang.String

The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#backup_odb_subnet GoogleOracleDatabaseExadbVmCluster#backup_odb_subnet}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name for the ExadbVmCluster.

The name does not have to
be unique within your project. The name must be 1-255 characters long and
can only contain alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#display_name GoogleOracleDatabaseExadbVmCluster#display_name}

---

##### `exadbVmClusterId`<sup>Required</sup> <a name="exadbVmClusterId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.exadbVmClusterId"></a>

- *Type:* java.lang.String

The ID of the ExadbVmCluster to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#exadb_vm_cluster_id GoogleOracleDatabaseExadbVmCluster#exadb_vm_cluster_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#location GoogleOracleDatabaseExadbVmCluster#location}

---

##### `odbSubnet`<sup>Required</sup> <a name="odbSubnet" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.odbSubnet"></a>

- *Type:* java.lang.String

The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#odb_subnet GoogleOracleDatabaseExadbVmCluster#odb_subnet}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties">GoogleOracleDatabaseExadbVmClusterProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#properties GoogleOracleDatabaseExadbVmCluster#properties}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#deletion_policy GoogleOracleDatabaseExadbVmCluster#deletion_policy}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#deletion_protection GoogleOracleDatabaseExadbVmCluster#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#id GoogleOracleDatabaseExadbVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels or tags associated with the ExadbVmCluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#labels GoogleOracleDatabaseExadbVmCluster#labels}

---

##### `odbNetwork`<sup>Optional</sup> <a name="odbNetwork" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.odbNetwork"></a>

- *Type:* java.lang.String

The name of the OdbNetwork associated with the ExadbVmCluster.

Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}
It is optional but if specified, this should match the parent ODBNetwork of
the OdbSubnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#odb_network GoogleOracleDatabaseExadbVmCluster#odb_network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#project GoogleOracleDatabaseExadbVmCluster#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts">GoogleOracleDatabaseExadbVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#timeouts GoogleOracleDatabaseExadbVmCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetOdbNetwork">resetOdbNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProperties` <a name="putProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putProperties"></a>

```java
public void putProperties(GoogleOracleDatabaseExadbVmClusterProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties">GoogleOracleDatabaseExadbVmClusterProperties</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putTimeouts"></a>

```java
public void putTimeouts(GoogleOracleDatabaseExadbVmClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts">GoogleOracleDatabaseExadbVmClusterTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetOdbNetwork` <a name="resetOdbNetwork" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetOdbNetwork"></a>

```java
public void resetOdbNetwork()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleOracleDatabaseExadbVmCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exadb_vm_cluster.GoogleOracleDatabaseExadbVmCluster;

GoogleOracleDatabaseExadbVmCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exadb_vm_cluster.GoogleOracleDatabaseExadbVmCluster;

GoogleOracleDatabaseExadbVmCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exadb_vm_cluster.GoogleOracleDatabaseExadbVmCluster;

GoogleOracleDatabaseExadbVmCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exadb_vm_cluster.GoogleOracleDatabaseExadbVmCluster;

GoogleOracleDatabaseExadbVmCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleOracleDatabaseExadbVmCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleOracleDatabaseExadbVmCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleOracleDatabaseExadbVmCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleOracleDatabaseExadbVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseExadbVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.entitlementId">entitlementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.gcpOracleZone">gcpOracleZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference">GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference">GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.backupOdbSubnetInput">backupOdbSubnetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.exadbVmClusterIdInput">exadbVmClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.odbNetworkInput">odbNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.odbSubnetInput">odbSubnetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties">GoogleOracleDatabaseExadbVmClusterProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts">GoogleOracleDatabaseExadbVmClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.backupOdbSubnet">backupOdbSubnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.exadbVmClusterId">exadbVmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.odbNetwork">odbNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.odbSubnet">odbSubnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.entitlementId"></a>

```java
public java.lang.String getEntitlementId();
```

- *Type:* java.lang.String

---

##### `gcpOracleZone`<sup>Required</sup> <a name="gcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.gcpOracleZone"></a>

```java
public java.lang.String getGcpOracleZone();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.properties"></a>

```java
public GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference getProperties();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference">GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.timeouts"></a>

```java
public GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference">GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference</a>

---

##### `backupOdbSubnetInput`<sup>Optional</sup> <a name="backupOdbSubnetInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.backupOdbSubnetInput"></a>

```java
public java.lang.String getBackupOdbSubnetInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.deletionProtectionInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `exadbVmClusterIdInput`<sup>Optional</sup> <a name="exadbVmClusterIdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.exadbVmClusterIdInput"></a>

```java
public java.lang.String getExadbVmClusterIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `odbNetworkInput`<sup>Optional</sup> <a name="odbNetworkInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.odbNetworkInput"></a>

```java
public java.lang.String getOdbNetworkInput();
```

- *Type:* java.lang.String

---

##### `odbSubnetInput`<sup>Optional</sup> <a name="odbSubnetInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.odbSubnetInput"></a>

```java
public java.lang.String getOdbSubnetInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.propertiesInput"></a>

```java
public GoogleOracleDatabaseExadbVmClusterProperties getPropertiesInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties">GoogleOracleDatabaseExadbVmClusterProperties</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.timeoutsInput"></a>

```java
public IResolvable|GoogleOracleDatabaseExadbVmClusterTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts">GoogleOracleDatabaseExadbVmClusterTimeouts</a>

---

##### `backupOdbSubnet`<sup>Required</sup> <a name="backupOdbSubnet" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.backupOdbSubnet"></a>

```java
public java.lang.String getBackupOdbSubnet();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `exadbVmClusterId`<sup>Required</sup> <a name="exadbVmClusterId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.exadbVmClusterId"></a>

```java
public java.lang.String getExadbVmClusterId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `odbNetwork`<sup>Required</sup> <a name="odbNetwork" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.odbNetwork"></a>

```java
public java.lang.String getOdbNetwork();
```

- *Type:* java.lang.String

---

##### `odbSubnet`<sup>Required</sup> <a name="odbSubnet" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.odbSubnet"></a>

```java
public java.lang.String getOdbSubnet();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseExadbVmClusterConfig <a name="GoogleOracleDatabaseExadbVmClusterConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exadb_vm_cluster.GoogleOracleDatabaseExadbVmClusterConfig;

GoogleOracleDatabaseExadbVmClusterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backupOdbSubnet(java.lang.String)
    .displayName(java.lang.String)
    .exadbVmClusterId(java.lang.String)
    .location(java.lang.String)
    .odbSubnet(java.lang.String)
    .properties(GoogleOracleDatabaseExadbVmClusterProperties)
//  .deletionPolicy(java.lang.String)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .odbNetwork(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleOracleDatabaseExadbVmClusterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.backupOdbSubnet">backupOdbSubnet</a></code> | <code>java.lang.String</code> | The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.exadbVmClusterId">exadbVmClusterId</a></code> | <code>java.lang.String</code> | The ID of the ExadbVmCluster to create. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.odbSubnet">odbSubnet</a></code> | <code>java.lang.String</code> | The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties">GoogleOracleDatabaseExadbVmClusterProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#id GoogleOracleDatabaseExadbVmCluster#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels or tags associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.odbNetwork">odbNetwork</a></code> | <code>java.lang.String</code> | The name of the OdbNetwork associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#project GoogleOracleDatabaseExadbVmCluster#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts">GoogleOracleDatabaseExadbVmClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backupOdbSubnet`<sup>Required</sup> <a name="backupOdbSubnet" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.backupOdbSubnet"></a>

```java
public java.lang.String getBackupOdbSubnet();
```

- *Type:* java.lang.String

The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#backup_odb_subnet GoogleOracleDatabaseExadbVmCluster#backup_odb_subnet}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name for the ExadbVmCluster.

The name does not have to
be unique within your project. The name must be 1-255 characters long and
can only contain alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#display_name GoogleOracleDatabaseExadbVmCluster#display_name}

---

##### `exadbVmClusterId`<sup>Required</sup> <a name="exadbVmClusterId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.exadbVmClusterId"></a>

```java
public java.lang.String getExadbVmClusterId();
```

- *Type:* java.lang.String

The ID of the ExadbVmCluster to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#exadb_vm_cluster_id GoogleOracleDatabaseExadbVmCluster#exadb_vm_cluster_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#location GoogleOracleDatabaseExadbVmCluster#location}

---

##### `odbSubnet`<sup>Required</sup> <a name="odbSubnet" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.odbSubnet"></a>

```java
public java.lang.String getOdbSubnet();
```

- *Type:* java.lang.String

The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#odb_subnet GoogleOracleDatabaseExadbVmCluster#odb_subnet}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.properties"></a>

```java
public GoogleOracleDatabaseExadbVmClusterProperties getProperties();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties">GoogleOracleDatabaseExadbVmClusterProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#properties GoogleOracleDatabaseExadbVmCluster#properties}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#deletion_policy GoogleOracleDatabaseExadbVmCluster#deletion_policy}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#deletion_protection GoogleOracleDatabaseExadbVmCluster#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#id GoogleOracleDatabaseExadbVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels or tags associated with the ExadbVmCluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#labels GoogleOracleDatabaseExadbVmCluster#labels}

---

##### `odbNetwork`<sup>Optional</sup> <a name="odbNetwork" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.odbNetwork"></a>

```java
public java.lang.String getOdbNetwork();
```

- *Type:* java.lang.String

The name of the OdbNetwork associated with the ExadbVmCluster.

Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}
It is optional but if specified, this should match the parent ODBNetwork of
the OdbSubnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#odb_network GoogleOracleDatabaseExadbVmCluster#odb_network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#project GoogleOracleDatabaseExadbVmCluster#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.timeouts"></a>

```java
public GoogleOracleDatabaseExadbVmClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts">GoogleOracleDatabaseExadbVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#timeouts GoogleOracleDatabaseExadbVmCluster#timeouts}

---

### GoogleOracleDatabaseExadbVmClusterProperties <a name="GoogleOracleDatabaseExadbVmClusterProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exadb_vm_cluster.GoogleOracleDatabaseExadbVmClusterProperties;

GoogleOracleDatabaseExadbVmClusterProperties.builder()
    .enabledEcpuCountPerNode(java.lang.Number)
    .exascaleDbStorageVault(java.lang.String)
    .gridImageId(java.lang.String)
    .hostnamePrefix(java.lang.String)
    .nodeCount(java.lang.Number)
    .shapeAttribute(java.lang.String)
    .sshPublicKeys(java.util.List<java.lang.String>)
    .vmFileSystemStorage(GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage)
//  .additionalEcpuCountPerNode(java.lang.Number)
//  .clusterName(java.lang.String)
//  .dataCollectionOptions(GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions)
//  .licenseModel(java.lang.String)
//  .scanListenerPortTcp(java.lang.Number)
//  .timeZone(GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.enabledEcpuCountPerNode">enabledEcpuCountPerNode</a></code> | <code>java.lang.Number</code> | The number of ECPUs enabled per node for an exadata vm cluster on exascale infrastructure. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.exascaleDbStorageVault">exascaleDbStorageVault</a></code> | <code>java.lang.String</code> | The name of ExascaleDbStorageVault associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.gridImageId">gridImageId</a></code> | <code>java.lang.String</code> | Grid Infrastructure Version. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.hostnamePrefix">hostnamePrefix</a></code> | <code>java.lang.String</code> | Prefix for VM cluster host names. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | The number of nodes/VMs in the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.shapeAttribute">shapeAttribute</a></code> | <code>java.lang.String</code> | The shape attribute of the VM cluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | The SSH public keys for the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.vmFileSystemStorage">vmFileSystemStorage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a></code> | vm_file_system_storage block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.additionalEcpuCountPerNode">additionalEcpuCountPerNode</a></code> | <code>java.lang.Number</code> | The number of additional ECPUs per node for an Exadata VM cluster on exascale infrastructure. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | The cluster name for Exascale vm cluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | The license type of the ExadbVmCluster. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>java.lang.Number</code> | SCAN listener port - TCP. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.timeZone">timeZone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone">GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone</a></code> | time_zone block. |

---

##### `enabledEcpuCountPerNode`<sup>Required</sup> <a name="enabledEcpuCountPerNode" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.enabledEcpuCountPerNode"></a>

```java
public java.lang.Number getEnabledEcpuCountPerNode();
```

- *Type:* java.lang.Number

The number of ECPUs enabled per node for an exadata vm cluster on exascale infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#enabled_ecpu_count_per_node GoogleOracleDatabaseExadbVmCluster#enabled_ecpu_count_per_node}

---

##### `exascaleDbStorageVault`<sup>Required</sup> <a name="exascaleDbStorageVault" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.exascaleDbStorageVault"></a>

```java
public java.lang.String getExascaleDbStorageVault();
```

- *Type:* java.lang.String

The name of ExascaleDbStorageVault associated with the ExadbVmCluster.

It can refer to an existing ExascaleDbStorageVault. Or a new one can be
created during the ExadbVmCluster creation (requires
storage_vault_properties to be set).
Format:
projects/{project}/locations/{location}/exascaleDbStorageVaults/{exascale_db_storage_vault}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#exascale_db_storage_vault GoogleOracleDatabaseExadbVmCluster#exascale_db_storage_vault}

---

##### `gridImageId`<sup>Required</sup> <a name="gridImageId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.gridImageId"></a>

```java
public java.lang.String getGridImageId();
```

- *Type:* java.lang.String

Grid Infrastructure Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#grid_image_id GoogleOracleDatabaseExadbVmCluster#grid_image_id}

---

##### `hostnamePrefix`<sup>Required</sup> <a name="hostnamePrefix" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.hostnamePrefix"></a>

```java
public java.lang.String getHostnamePrefix();
```

- *Type:* java.lang.String

Prefix for VM cluster host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#hostname_prefix GoogleOracleDatabaseExadbVmCluster#hostname_prefix}

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

The number of nodes/VMs in the ExadbVmCluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#node_count GoogleOracleDatabaseExadbVmCluster#node_count}

---

##### `shapeAttribute`<sup>Required</sup> <a name="shapeAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.shapeAttribute"></a>

```java
public java.lang.String getShapeAttribute();
```

- *Type:* java.lang.String

The shape attribute of the VM cluster.

The type of Exascale storage used
for Exadata VM cluster. The default is SMART_STORAGE which supports Oracle
Database 23ai and later
Possible values:
SMART_STORAGE
BLOCK_STORAGE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#shape_attribute GoogleOracleDatabaseExadbVmCluster#shape_attribute}

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.sshPublicKeys"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeys();
```

- *Type:* java.util.List<java.lang.String>

The SSH public keys for the ExadbVmCluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#ssh_public_keys GoogleOracleDatabaseExadbVmCluster#ssh_public_keys}

---

##### `vmFileSystemStorage`<sup>Required</sup> <a name="vmFileSystemStorage" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.vmFileSystemStorage"></a>

```java
public GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage getVmFileSystemStorage();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

vm_file_system_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#vm_file_system_storage GoogleOracleDatabaseExadbVmCluster#vm_file_system_storage}

---

##### `additionalEcpuCountPerNode`<sup>Optional</sup> <a name="additionalEcpuCountPerNode" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.additionalEcpuCountPerNode"></a>

```java
public java.lang.Number getAdditionalEcpuCountPerNode();
```

- *Type:* java.lang.Number

The number of additional ECPUs per node for an Exadata VM cluster on exascale infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#additional_ecpu_count_per_node GoogleOracleDatabaseExadbVmCluster#additional_ecpu_count_per_node}

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

The cluster name for Exascale vm cluster.

The cluster name must begin with
an alphabetic character and may contain hyphens(-) but can not contain
underscores(_). It should be not more than 11 characters and is not case
sensitive.
OCI Cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#cluster_name GoogleOracleDatabaseExadbVmCluster#cluster_name}

---

##### `dataCollectionOptions`<sup>Optional</sup> <a name="dataCollectionOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.dataCollectionOptions"></a>

```java
public GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions getDataCollectionOptions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#data_collection_options GoogleOracleDatabaseExadbVmCluster#data_collection_options}

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

The license type of the ExadbVmCluster. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#license_model GoogleOracleDatabaseExadbVmCluster#license_model}

---

##### `scanListenerPortTcp`<sup>Optional</sup> <a name="scanListenerPortTcp" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.scanListenerPortTcp"></a>

```java
public java.lang.Number getScanListenerPortTcp();
```

- *Type:* java.lang.Number

SCAN listener port - TCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#scan_listener_port_tcp GoogleOracleDatabaseExadbVmCluster#scan_listener_port_tcp}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.timeZone"></a>

```java
public GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone getTimeZone();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone">GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#time_zone GoogleOracleDatabaseExadbVmCluster#time_zone}

---

### GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions <a name="GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exadb_vm_cluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions;

GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.builder()
//  .isDiagnosticsEventsEnabled(java.lang.Boolean|IResolvable)
//  .isHealthMonitoringEnabled(java.lang.Boolean|IResolvable)
//  .isIncidentLogsEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to enable data collection for diagnostics. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to enable health monitoring. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to enable incident logs and trace collection. |

---

##### `isDiagnosticsEventsEnabled`<sup>Optional</sup> <a name="isDiagnosticsEventsEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsDiagnosticsEventsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to enable data collection for diagnostics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#is_diagnostics_events_enabled GoogleOracleDatabaseExadbVmCluster#is_diagnostics_events_enabled}

---

##### `isHealthMonitoringEnabled`<sup>Optional</sup> <a name="isHealthMonitoringEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsHealthMonitoringEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to enable health monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#is_health_monitoring_enabled GoogleOracleDatabaseExadbVmCluster#is_health_monitoring_enabled}

---

##### `isIncidentLogsEnabled`<sup>Optional</sup> <a name="isIncidentLogsEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsIncidentLogsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to enable incident logs and trace collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#is_incident_logs_enabled GoogleOracleDatabaseExadbVmCluster#is_incident_logs_enabled}

---

### GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone <a name="GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exadb_vm_cluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone;

GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone.builder()
//  .id(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone.property.id">id</a></code> | <code>java.lang.String</code> | IANA Time Zone Database time zone. For example "America/New_York". |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone.property.version">version</a></code> | <code>java.lang.String</code> | IANA Time Zone Database version number. For example "2019a". |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

IANA Time Zone Database time zone. For example "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#id GoogleOracleDatabaseExadbVmCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

IANA Time Zone Database version number. For example "2019a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#version GoogleOracleDatabaseExadbVmCluster#version}

---

### GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage <a name="GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exadb_vm_cluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage;

GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage.builder()
    .sizeInGbsPerNode(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage.property.sizeInGbsPerNode">sizeInGbsPerNode</a></code> | <code>java.lang.Number</code> | The storage allocation for the exadbvmcluster per node, in gigabytes (GB). |

---

##### `sizeInGbsPerNode`<sup>Required</sup> <a name="sizeInGbsPerNode" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage.property.sizeInGbsPerNode"></a>

```java
public java.lang.Number getSizeInGbsPerNode();
```

- *Type:* java.lang.Number

The storage allocation for the exadbvmcluster per node, in gigabytes (GB).

This field is used to calculate the total storage allocation for the
exadbvmcluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#size_in_gbs_per_node GoogleOracleDatabaseExadbVmCluster#size_in_gbs_per_node}

---

### GoogleOracleDatabaseExadbVmClusterTimeouts <a name="GoogleOracleDatabaseExadbVmClusterTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exadb_vm_cluster.GoogleOracleDatabaseExadbVmClusterTimeouts;

GoogleOracleDatabaseExadbVmClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#create GoogleOracleDatabaseExadbVmCluster#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#delete GoogleOracleDatabaseExadbVmCluster#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#update GoogleOracleDatabaseExadbVmCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#create GoogleOracleDatabaseExadbVmCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#delete GoogleOracleDatabaseExadbVmCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_oracle_database_exadb_vm_cluster#update GoogleOracleDatabaseExadbVmCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference <a name="GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exadb_vm_cluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference;

new GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">resetIsDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">resetIsHealthMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">resetIsIncidentLogsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsDiagnosticsEventsEnabled` <a name="resetIsDiagnosticsEventsEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```java
public void resetIsDiagnosticsEventsEnabled()
```

##### `resetIsHealthMonitoringEnabled` <a name="resetIsHealthMonitoringEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```java
public void resetIsHealthMonitoringEnabled()
```

##### `resetIsIncidentLogsEnabled` <a name="resetIsIncidentLogsEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```java
public void resetIsIncidentLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">isDiagnosticsEventsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">isHealthMonitoringEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">isIncidentLogsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="isDiagnosticsEventsEnabledInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsDiagnosticsEventsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isHealthMonitoringEnabledInput`<sup>Optional</sup> <a name="isHealthMonitoringEnabledInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsHealthMonitoringEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isIncidentLogsEnabledInput`<sup>Optional</sup> <a name="isIncidentLogsEnabledInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsIncidentLogsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isDiagnosticsEventsEnabled`<sup>Required</sup> <a name="isDiagnosticsEventsEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsDiagnosticsEventsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isHealthMonitoringEnabled`<sup>Required</sup> <a name="isHealthMonitoringEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsHealthMonitoringEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isIncidentLogsEnabled`<sup>Required</sup> <a name="isIncidentLogsEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsIncidentLogsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

---


### GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference <a name="GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exadb_vm_cluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference;

new GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putDataCollectionOptions">putDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putTimeZone">putTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putVmFileSystemStorage">putVmFileSystemStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetAdditionalEcpuCountPerNode">resetAdditionalEcpuCountPerNode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetClusterName">resetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetDataCollectionOptions">resetDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetScanListenerPortTcp">resetScanListenerPortTcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataCollectionOptions` <a name="putDataCollectionOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putDataCollectionOptions"></a>

```java
public void putDataCollectionOptions(GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

---

##### `putTimeZone` <a name="putTimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putTimeZone"></a>

```java
public void putTimeZone(GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putTimeZone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone">GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone</a>

---

##### `putVmFileSystemStorage` <a name="putVmFileSystemStorage" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putVmFileSystemStorage"></a>

```java
public void putVmFileSystemStorage(GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putVmFileSystemStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

---

##### `resetAdditionalEcpuCountPerNode` <a name="resetAdditionalEcpuCountPerNode" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetAdditionalEcpuCountPerNode"></a>

```java
public void resetAdditionalEcpuCountPerNode()
```

##### `resetClusterName` <a name="resetClusterName" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetClusterName"></a>

```java
public void resetClusterName()
```

##### `resetDataCollectionOptions` <a name="resetDataCollectionOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetDataCollectionOptions"></a>

```java
public void resetDataCollectionOptions()
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetLicenseModel"></a>

```java
public void resetLicenseModel()
```

##### `resetScanListenerPortTcp` <a name="resetScanListenerPortTcp" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetScanListenerPortTcp"></a>

```java
public void resetScanListenerPortTcp()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference">GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.giVersion">giVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.memorySizeGb">memorySizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.ociUri">ociUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZone">timeZone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference">GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorage">vmFileSystemStorage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference">GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNodeInput">additionalEcpuCountPerNodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptionsInput">dataCollectionOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNodeInput">enabledEcpuCountPerNodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVaultInput">exascaleDbStorageVaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageIdInput">gridImageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefixInput">hostnamePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModelInput">licenseModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcpInput">scanListenerPortTcpInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttributeInput">shapeAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeysInput">sshPublicKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone">GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorageInput">vmFileSystemStorageInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNode">additionalEcpuCountPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNode">enabledEcpuCountPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVault">exascaleDbStorageVault</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageId">gridImageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefix">hostnamePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttribute">shapeAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties">GoogleOracleDatabaseExadbVmClusterProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataCollectionOptions`<sup>Required</sup> <a name="dataCollectionOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptions"></a>

```java
public GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference getDataCollectionOptions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference">GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference</a>

---

##### `giVersion`<sup>Required</sup> <a name="giVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.giVersion"></a>

```java
public java.lang.String getGiVersion();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.lifecycleState"></a>

```java
public java.lang.String getLifecycleState();
```

- *Type:* java.lang.String

---

##### `memorySizeGb`<sup>Required</sup> <a name="memorySizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.memorySizeGb"></a>

```java
public java.lang.Number getMemorySizeGb();
```

- *Type:* java.lang.Number

---

##### `ociUri`<sup>Required</sup> <a name="ociUri" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.ociUri"></a>

```java
public java.lang.String getOciUri();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZone"></a>

```java
public GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference getTimeZone();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference">GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference</a>

---

##### `vmFileSystemStorage`<sup>Required</sup> <a name="vmFileSystemStorage" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorage"></a>

```java
public GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference getVmFileSystemStorage();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference">GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference</a>

---

##### `additionalEcpuCountPerNodeInput`<sup>Optional</sup> <a name="additionalEcpuCountPerNodeInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNodeInput"></a>

```java
public java.lang.Number getAdditionalEcpuCountPerNodeInput();
```

- *Type:* java.lang.Number

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `dataCollectionOptionsInput`<sup>Optional</sup> <a name="dataCollectionOptionsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptionsInput"></a>

```java
public GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions getDataCollectionOptionsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

---

##### `enabledEcpuCountPerNodeInput`<sup>Optional</sup> <a name="enabledEcpuCountPerNodeInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNodeInput"></a>

```java
public java.lang.Number getEnabledEcpuCountPerNodeInput();
```

- *Type:* java.lang.Number

---

##### `exascaleDbStorageVaultInput`<sup>Optional</sup> <a name="exascaleDbStorageVaultInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVaultInput"></a>

```java
public java.lang.String getExascaleDbStorageVaultInput();
```

- *Type:* java.lang.String

---

##### `gridImageIdInput`<sup>Optional</sup> <a name="gridImageIdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageIdInput"></a>

```java
public java.lang.String getGridImageIdInput();
```

- *Type:* java.lang.String

---

##### `hostnamePrefixInput`<sup>Optional</sup> <a name="hostnamePrefixInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefixInput"></a>

```java
public java.lang.String getHostnamePrefixInput();
```

- *Type:* java.lang.String

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModelInput"></a>

```java
public java.lang.String getLicenseModelInput();
```

- *Type:* java.lang.String

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCountInput"></a>

```java
public java.lang.Number getNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `scanListenerPortTcpInput`<sup>Optional</sup> <a name="scanListenerPortTcpInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcpInput"></a>

```java
public java.lang.Number getScanListenerPortTcpInput();
```

- *Type:* java.lang.Number

---

##### `shapeAttributeInput`<sup>Optional</sup> <a name="shapeAttributeInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttributeInput"></a>

```java
public java.lang.String getShapeAttributeInput();
```

- *Type:* java.lang.String

---

##### `sshPublicKeysInput`<sup>Optional</sup> <a name="sshPublicKeysInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeysInput"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZoneInput"></a>

```java
public GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone getTimeZoneInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone">GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone</a>

---

##### `vmFileSystemStorageInput`<sup>Optional</sup> <a name="vmFileSystemStorageInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorageInput"></a>

```java
public GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage getVmFileSystemStorageInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

---

##### `additionalEcpuCountPerNode`<sup>Required</sup> <a name="additionalEcpuCountPerNode" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNode"></a>

```java
public java.lang.Number getAdditionalEcpuCountPerNode();
```

- *Type:* java.lang.Number

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `enabledEcpuCountPerNode`<sup>Required</sup> <a name="enabledEcpuCountPerNode" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNode"></a>

```java
public java.lang.Number getEnabledEcpuCountPerNode();
```

- *Type:* java.lang.Number

---

##### `exascaleDbStorageVault`<sup>Required</sup> <a name="exascaleDbStorageVault" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVault"></a>

```java
public java.lang.String getExascaleDbStorageVault();
```

- *Type:* java.lang.String

---

##### `gridImageId`<sup>Required</sup> <a name="gridImageId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageId"></a>

```java
public java.lang.String getGridImageId();
```

- *Type:* java.lang.String

---

##### `hostnamePrefix`<sup>Required</sup> <a name="hostnamePrefix" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefix"></a>

```java
public java.lang.String getHostnamePrefix();
```

- *Type:* java.lang.String

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `scanListenerPortTcp`<sup>Required</sup> <a name="scanListenerPortTcp" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcp"></a>

```java
public java.lang.Number getScanListenerPortTcp();
```

- *Type:* java.lang.Number

---

##### `shapeAttribute`<sup>Required</sup> <a name="shapeAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttribute"></a>

```java
public java.lang.String getShapeAttribute();
```

- *Type:* java.lang.String

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeys"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseExadbVmClusterProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties">GoogleOracleDatabaseExadbVmClusterProperties</a>

---


### GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference <a name="GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exadb_vm_cluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference;

new GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone">GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone">GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone</a>

---


### GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference <a name="GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exadb_vm_cluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference;

new GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNodeInput">sizeInGbsPerNodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNode">sizeInGbsPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sizeInGbsPerNodeInput`<sup>Optional</sup> <a name="sizeInGbsPerNodeInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNodeInput"></a>

```java
public java.lang.Number getSizeInGbsPerNodeInput();
```

- *Type:* java.lang.Number

---

##### `sizeInGbsPerNode`<sup>Required</sup> <a name="sizeInGbsPerNode" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNode"></a>

```java
public java.lang.Number getSizeInGbsPerNode();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

---


### GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference <a name="GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exadb_vm_cluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference;

new GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts">GoogleOracleDatabaseExadbVmClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleOracleDatabaseExadbVmClusterTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts">GoogleOracleDatabaseExadbVmClusterTimeouts</a>

---



