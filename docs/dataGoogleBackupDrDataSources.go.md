# `dataGoogleBackupDrDataSources` Submodule <a name="`dataGoogleBackupDrDataSources` Submodule" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBackupDrDataSources <a name="DataGoogleBackupDrDataSources" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_backup_dr_data_sources google_backup_dr_data_sources}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSources(scope Construct, id *string, config DataGoogleBackupDrDataSourcesConfig) DataGoogleBackupDrDataSources
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig">DataGoogleBackupDrDataSourcesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig">DataGoogleBackupDrDataSourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetOrderBy">ResetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetId"></a>

```go
func ResetId()
```

##### `ResetOrderBy` <a name="ResetOrderBy" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetOrderBy"></a>

```go
func ResetOrderBy()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleBackupDrDataSources resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.DataGoogleBackupDrDataSources_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.DataGoogleBackupDrDataSources_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.DataGoogleBackupDrDataSources_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.DataGoogleBackupDrDataSources_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleBackupDrDataSources resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleBackupDrDataSources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleBackupDrDataSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_backup_dr_data_sources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleBackupDrDataSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.dataSources">DataSources</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList">DataGoogleBackupDrDataSourcesDataSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.backupVaultIdInput">BackupVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.orderByInput">OrderByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.backupVaultId">BackupVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.orderBy">OrderBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `DataSources`<sup>Required</sup> <a name="DataSources" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.dataSources"></a>

```go
func DataSources() DataGoogleBackupDrDataSourcesDataSourcesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList">DataGoogleBackupDrDataSourcesDataSourcesList</a>

---

##### `BackupVaultIdInput`<sup>Optional</sup> <a name="BackupVaultIdInput" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.backupVaultIdInput"></a>

```go
func BackupVaultIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OrderByInput`<sup>Optional</sup> <a name="OrderByInput" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.orderByInput"></a>

```go
func OrderByInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `BackupVaultId`<sup>Required</sup> <a name="BackupVaultId" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.backupVaultId"></a>

```go
func BackupVaultId() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `OrderBy`<sup>Required</sup> <a name="OrderBy" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.orderBy"></a>

```go
func OrderBy() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBackupDrDataSourcesConfig <a name="DataGoogleBackupDrDataSourcesConfig" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrdatasources"

&datagooglebackupdrdatasources.DataGoogleBackupDrDataSourcesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BackupVaultId: *string,
	Location: *string,
	Filter: *string,
	Id: *string,
	OrderBy: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.backupVaultId">BackupVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_backup_dr_data_sources#backup_vault_id DataGoogleBackupDrDataSources#backup_vault_id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_backup_dr_data_sources#location DataGoogleBackupDrDataSources#location}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.filter">Filter</a></code> | <code>*string</code> | The filter to apply to list results. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_backup_dr_data_sources#id DataGoogleBackupDrDataSources#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.orderBy">OrderBy</a></code> | <code>*string</code> | The order to sort results by. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_backup_dr_data_sources#project DataGoogleBackupDrDataSources#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupVaultId`<sup>Required</sup> <a name="BackupVaultId" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.backupVaultId"></a>

```go
BackupVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_backup_dr_data_sources#backup_vault_id DataGoogleBackupDrDataSources#backup_vault_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_backup_dr_data_sources#location DataGoogleBackupDrDataSources#location}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

The filter to apply to list results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_backup_dr_data_sources#filter DataGoogleBackupDrDataSources#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_backup_dr_data_sources#id DataGoogleBackupDrDataSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OrderBy`<sup>Optional</sup> <a name="OrderBy" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.orderBy"></a>

```go
OrderBy *string
```

- *Type:* *string

The order to sort results by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_backup_dr_data_sources#order_by DataGoogleBackupDrDataSources#order_by}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_backup_dr_data_sources#project DataGoogleBackupDrDataSources#project}.

---

### DataGoogleBackupDrDataSourcesDataSources <a name="DataGoogleBackupDrDataSourcesDataSources" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrdatasources"

&datagooglebackupdrdatasources.DataGoogleBackupDrDataSourcesDataSources {

}
```


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrdatasources"

&datagooglebackupdrdatasources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo {

}
```


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrdatasources"

&datagooglebackupdrdatasources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig {

}
```


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrdatasources"

&datagooglebackupdrdatasources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig {

}
```


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrdatasources"

&datagooglebackupdrdatasources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication {

}
```


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrdatasources"

&datagooglebackupdrdatasources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource {

}
```


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrdatasources"

&datagooglebackupdrdatasources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.applicationName">ApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceId">BackupApplianceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceName">BackupApplianceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slaId">SlaId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slpName">SlpName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.sltName">SltName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.applicationName"></a>

```go
func ApplicationName() *string
```

- *Type:* *string

---

##### `BackupApplianceId`<sup>Required</sup> <a name="BackupApplianceId" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceId"></a>

```go
func BackupApplianceId() *string
```

- *Type:* *string

---

##### `BackupApplianceName`<sup>Required</sup> <a name="BackupApplianceName" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceName"></a>

```go
func BackupApplianceName() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `SlaId`<sup>Required</sup> <a name="SlaId" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slaId"></a>

```go
func SlaId() *string
```

- *Type:* *string

---

##### `SlpName`<sup>Required</sup> <a name="SlpName" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slpName"></a>

```go
func SlpName() *string
```

- *Type:* *string

---

##### `SltName`<sup>Required</sup> <a name="SltName" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.sltName"></a>

```go
func SltName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlan">BackupPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanAssociation">BackupPlanAssociation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanDescription">BackupPlanDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanRules">BackupPlanRules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlan"></a>

```go
func BackupPlan() *string
```

- *Type:* *string

---

##### `BackupPlanAssociation`<sup>Required</sup> <a name="BackupPlanAssociation" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanAssociation"></a>

```go
func BackupPlanAssociation() *string
```

- *Type:* *string

---

##### `BackupPlanDescription`<sup>Required</sup> <a name="BackupPlanDescription" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanDescription"></a>

```go
func BackupPlanDescription() *string
```

- *Type:* *string

---

##### `BackupPlanRules`<sup>Required</sup> <a name="BackupPlanRules" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanRules"></a>

```go
func BackupPlanRules() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.backupApplianceBackupConfig">BackupApplianceBackupConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.gcpBackupConfig">GcpBackupConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastBackupError">LastBackupError</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastBackupState">LastBackupState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastSuccessfulBackupConsistencyTime">LastSuccessfulBackupConsistencyTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupApplianceBackupConfig`<sup>Required</sup> <a name="BackupApplianceBackupConfig" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.backupApplianceBackupConfig"></a>

```go
func BackupApplianceBackupConfig() DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList</a>

---

##### `GcpBackupConfig`<sup>Required</sup> <a name="GcpBackupConfig" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.gcpBackupConfig"></a>

```go
func GcpBackupConfig() DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList</a>

---

##### `LastBackupError`<sup>Required</sup> <a name="LastBackupError" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastBackupError"></a>

```go
func LastBackupError() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `LastBackupState`<sup>Required</sup> <a name="LastBackupState" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastBackupState"></a>

```go
func LastBackupState() *string
```

- *Type:* *string

---

##### `LastSuccessfulBackupConsistencyTime`<sup>Required</sup> <a name="LastSuccessfulBackupConsistencyTime" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastSuccessfulBackupConsistencyTime"></a>

```go
func LastSuccessfulBackupConsistencyTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applianceId">ApplianceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applicationName">ApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.backupAppliance">BackupAppliance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.hostId">HostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication">DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplianceId`<sup>Required</sup> <a name="ApplianceId" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applianceId"></a>

```go
func ApplianceId() *string
```

- *Type:* *string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applicationName"></a>

```go
func ApplicationName() *string
```

- *Type:* *string

---

##### `BackupAppliance`<sup>Required</sup> <a name="BackupAppliance" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.backupAppliance"></a>

```go
func BackupAppliance() *string
```

- *Type:* *string

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.hostId"></a>

```go
func HostId() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication">DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskCount">TotalDiskCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskSizeGb">TotalDiskSizeGb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TotalDiskCount`<sup>Required</sup> <a name="TotalDiskCount" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskCount"></a>

```go
func TotalDiskCount() *string
```

- *Type:* *string

---

##### `TotalDiskSizeGb`<sup>Required</sup> <a name="TotalDiskSizeGb" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskSizeGb"></a>

```go
func TotalDiskSizeGb() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.computeInstanceDataSourceProperties">ComputeInstanceDataSourceProperties</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.gcpResourcename">GcpResourcename</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeInstanceDataSourceProperties`<sup>Required</sup> <a name="ComputeInstanceDataSourceProperties" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.computeInstanceDataSourceProperties"></a>

```go
func ComputeInstanceDataSourceProperties() DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList</a>

---

##### `GcpResourcename`<sup>Required</sup> <a name="GcpResourcename" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.gcpResourcename"></a>

```go
func GcpResourcename() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesList <a name="DataGoogleBackupDrDataSourcesDataSourcesList" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrDataSourcesDataSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrDataSourcesDataSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrDataSourcesDataSourcesOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesOutputReference" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrDataSourcesDataSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.backupConfigInfo">BackupConfigInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.backupCount">BackupCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.configState">ConfigState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.dataSourceBackupApplianceApplication">DataSourceBackupApplianceApplication</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.dataSourceGcpResource">DataSourceGcpResource</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.labels">Labels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.totalStoredBytes">TotalStoredBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSources">DataGoogleBackupDrDataSourcesDataSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupConfigInfo`<sup>Required</sup> <a name="BackupConfigInfo" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.backupConfigInfo"></a>

```go
func BackupConfigInfo() DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList</a>

---

##### `BackupCount`<sup>Required</sup> <a name="BackupCount" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.backupCount"></a>

```go
func BackupCount() *string
```

- *Type:* *string

---

##### `ConfigState`<sup>Required</sup> <a name="ConfigState" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.configState"></a>

```go
func ConfigState() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DataSourceBackupApplianceApplication`<sup>Required</sup> <a name="DataSourceBackupApplianceApplication" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.dataSourceBackupApplianceApplication"></a>

```go
func DataSourceBackupApplianceApplication() DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList</a>

---

##### `DataSourceGcpResource`<sup>Required</sup> <a name="DataSourceGcpResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.dataSourceGcpResource"></a>

```go
func DataSourceGcpResource() DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TotalStoredBytes`<sup>Required</sup> <a name="TotalStoredBytes" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.totalStoredBytes"></a>

```go
func TotalStoredBytes() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrDataSourcesDataSources
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSources">DataGoogleBackupDrDataSourcesDataSources</a>

---



