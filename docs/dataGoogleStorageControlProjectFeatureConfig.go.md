# `dataGoogleStorageControlProjectFeatureConfig` Submodule <a name="`dataGoogleStorageControlProjectFeatureConfig` Submodule" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageControlProjectFeatureConfig <a name="DataGoogleStorageControlProjectFeatureConfig" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/data-sources/google_storage_control_project_feature_config google_storage_control_project_feature_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/datagooglestoragecontrolprojectfeatureconfig"

datagooglestoragecontrolprojectfeatureconfig.NewDataGoogleStorageControlProjectFeatureConfig(scope Construct, id *string, config DataGoogleStorageControlProjectFeatureConfigConfig) DataGoogleStorageControlProjectFeatureConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigConfig">DataGoogleStorageControlProjectFeatureConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigConfig">DataGoogleStorageControlProjectFeatureConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleStorageControlProjectFeatureConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/datagooglestoragecontrolprojectfeatureconfig"

datagooglestoragecontrolprojectfeatureconfig.DataGoogleStorageControlProjectFeatureConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/datagooglestoragecontrolprojectfeatureconfig"

datagooglestoragecontrolprojectfeatureconfig.DataGoogleStorageControlProjectFeatureConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/datagooglestoragecontrolprojectfeatureconfig"

datagooglestoragecontrolprojectfeatureconfig.DataGoogleStorageControlProjectFeatureConfig_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/datagooglestoragecontrolprojectfeatureconfig"

datagooglestoragecontrolprojectfeatureconfig.DataGoogleStorageControlProjectFeatureConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleStorageControlProjectFeatureConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleStorageControlProjectFeatureConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleStorageControlProjectFeatureConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/data-sources/google_storage_control_project_feature_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageControlProjectFeatureConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.autoAnnotateConfig">AutoAnnotateConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList">DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterList">DataGoogleStorageControlProjectFeatureConfigFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.featureConfigIdInput">FeatureConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.featureConfigId">FeatureConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AutoAnnotateConfig`<sup>Required</sup> <a name="AutoAnnotateConfig" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.autoAnnotateConfig"></a>

```go
func AutoAnnotateConfig() DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList">DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.filter"></a>

```go
func Filter() DataGoogleStorageControlProjectFeatureConfigFilterList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterList">DataGoogleStorageControlProjectFeatureConfigFilterList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `FeatureConfigIdInput`<sup>Optional</sup> <a name="FeatureConfigIdInput" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.featureConfigIdInput"></a>

```go
func FeatureConfigIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `FeatureConfigId`<sup>Required</sup> <a name="FeatureConfigId" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.featureConfigId"></a>

```go
func FeatureConfigId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfig <a name="DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfig" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/datagooglestoragecontrolprojectfeatureconfig"

&datagooglestoragecontrolprojectfeatureconfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfig {

}
```


### DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels <a name="DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/datagooglestoragecontrolprojectfeatureconfig"

&datagooglestoragecontrolprojectfeatureconfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels {

}
```


### DataGoogleStorageControlProjectFeatureConfigConfig <a name="DataGoogleStorageControlProjectFeatureConfigConfig" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/datagooglestoragecontrolprojectfeatureconfig"

&datagooglestoragecontrolprojectfeatureconfig.DataGoogleStorageControlProjectFeatureConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FeatureConfigId: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigConfig.property.featureConfigId">FeatureConfigId</a></code> | <code>*string</code> | The ID of the feature configuration, which becomes the final component of its resource name. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/data-sources/google_storage_control_project_feature_config#id DataGoogleStorageControlProjectFeatureConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/data-sources/google_storage_control_project_feature_config#project DataGoogleStorageControlProjectFeatureConfig#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FeatureConfigId`<sup>Required</sup> <a name="FeatureConfigId" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigConfig.property.featureConfigId"></a>

```go
FeatureConfigId *string
```

- *Type:* *string

The ID of the feature configuration, which becomes the final component of its resource name.

The ID must be 1 to 63 characters long, start with a lowercase letter, and contain only
lowercase letters, digits, and dashes. The last character can't be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/data-sources/google_storage_control_project_feature_config#feature_config_id DataGoogleStorageControlProjectFeatureConfig#feature_config_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/data-sources/google_storage_control_project_feature_config#id DataGoogleStorageControlProjectFeatureConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/data-sources/google_storage_control_project_feature_config#project DataGoogleStorageControlProjectFeatureConfig#project}.

---

### DataGoogleStorageControlProjectFeatureConfigFilter <a name="DataGoogleStorageControlProjectFeatureConfigFilter" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/datagooglestoragecontrolprojectfeatureconfig"

&datagooglestoragecontrolprojectfeatureconfig.DataGoogleStorageControlProjectFeatureConfigFilter {

}
```


### DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets <a name="DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/datagooglestoragecontrolprojectfeatureconfig"

&datagooglestoragecontrolprojectfeatureconfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList <a name="DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/datagooglestoragecontrolprojectfeatureconfig"

datagooglestoragecontrolprojectfeatureconfig.NewDataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList <a name="DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/datagooglestoragecontrolprojectfeatureconfig"

datagooglestoragecontrolprojectfeatureconfig.NewDataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference <a name="DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/datagooglestoragecontrolprojectfeatureconfig"

datagooglestoragecontrolprojectfeatureconfig.NewDataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a>

---


### DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference <a name="DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/datagooglestoragecontrolprojectfeatureconfig"

datagooglestoragecontrolprojectfeatureconfig.NewDataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.models">Models</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList">DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.processingLocation">ProcessingLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Models`<sup>Required</sup> <a name="Models" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.models"></a>

```go
func Models() DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList">DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList</a>

---

##### `ProcessingLocation`<sup>Required</sup> <a name="ProcessingLocation" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.processingLocation"></a>

```go
func ProcessingLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a>

---


### DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList <a name="DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/datagooglestoragecontrolprojectfeatureconfig"

datagooglestoragecontrolprojectfeatureconfig.NewDataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference <a name="DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/datagooglestoragecontrolprojectfeatureconfig"

datagooglestoragecontrolprojectfeatureconfig.NewDataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```go
func BucketIdRegexes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a>

---


### DataGoogleStorageControlProjectFeatureConfigFilterList <a name="DataGoogleStorageControlProjectFeatureConfigFilterList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/datagooglestoragecontrolprojectfeatureconfig"

datagooglestoragecontrolprojectfeatureconfig.NewDataGoogleStorageControlProjectFeatureConfigFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectFeatureConfigFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectFeatureConfigFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectFeatureConfigFilterOutputReference <a name="DataGoogleStorageControlProjectFeatureConfigFilterOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/datagooglestoragecontrolprojectfeatureconfig"

datagooglestoragecontrolprojectfeatureconfig.NewDataGoogleStorageControlProjectFeatureConfigFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectFeatureConfigFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.property.includedCloudStorageBuckets">IncludedCloudStorageBuckets</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList">DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilter">DataGoogleStorageControlProjectFeatureConfigFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludedCloudStorageBuckets`<sup>Required</sup> <a name="IncludedCloudStorageBuckets" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.property.includedCloudStorageBuckets"></a>

```go
func IncludedCloudStorageBuckets() DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList">DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectFeatureConfigFilter
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectFeatureConfig.DataGoogleStorageControlProjectFeatureConfigFilter">DataGoogleStorageControlProjectFeatureConfigFilter</a>

---



