# `dataGoogleBackupDrBackupPlan` Submodule <a name="`dataGoogleBackupDrBackupPlan` Submodule" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBackupDrBackupPlan <a name="DataGoogleBackupDrBackupPlan" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_backup_dr_backup_plan google_backup_dr_backup_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrbackupplan"

datagooglebackupdrbackupplan.NewDataGoogleBackupDrBackupPlan(scope Construct, id *string, config DataGoogleBackupDrBackupPlanConfig) DataGoogleBackupDrBackupPlan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig">DataGoogleBackupDrBackupPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig">DataGoogleBackupDrBackupPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleBackupDrBackupPlan resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrbackupplan"

datagooglebackupdrbackupplan.DataGoogleBackupDrBackupPlan_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrbackupplan"

datagooglebackupdrbackupplan.DataGoogleBackupDrBackupPlan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrbackupplan"

datagooglebackupdrbackupplan.DataGoogleBackupDrBackupPlan_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrbackupplan"

datagooglebackupdrbackupplan.DataGoogleBackupDrBackupPlan_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleBackupDrBackupPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleBackupDrBackupPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleBackupDrBackupPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_backup_dr_backup_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleBackupDrBackupPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.backupRules">BackupRules</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList">DataGoogleBackupDrBackupPlanBackupRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.backupVault">BackupVault</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.backupVaultServiceAccount">BackupVaultServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.computeInstanceBackupPlanProperties">ComputeInstanceBackupPlanProperties</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList">DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.diskBackupPlanProperties">DiskBackupPlanProperties</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList">DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.logRetentionDays">LogRetentionDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.maxCustomOnDemandRetentionDays">MaxCustomOnDemandRetentionDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.supportedResourceTypes">SupportedResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.backupPlanIdInput">BackupPlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.backupPlanId">BackupPlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `BackupRules`<sup>Required</sup> <a name="BackupRules" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.backupRules"></a>

```go
func BackupRules() DataGoogleBackupDrBackupPlanBackupRulesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList">DataGoogleBackupDrBackupPlanBackupRulesList</a>

---

##### `BackupVault`<sup>Required</sup> <a name="BackupVault" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.backupVault"></a>

```go
func BackupVault() *string
```

- *Type:* *string

---

##### `BackupVaultServiceAccount`<sup>Required</sup> <a name="BackupVaultServiceAccount" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.backupVaultServiceAccount"></a>

```go
func BackupVaultServiceAccount() *string
```

- *Type:* *string

---

##### `ComputeInstanceBackupPlanProperties`<sup>Required</sup> <a name="ComputeInstanceBackupPlanProperties" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.computeInstanceBackupPlanProperties"></a>

```go
func ComputeInstanceBackupPlanProperties() DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList">DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DiskBackupPlanProperties`<sup>Required</sup> <a name="DiskBackupPlanProperties" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.diskBackupPlanProperties"></a>

```go
func DiskBackupPlanProperties() DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList">DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList</a>

---

##### `LogRetentionDays`<sup>Required</sup> <a name="LogRetentionDays" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.logRetentionDays"></a>

```go
func LogRetentionDays() *f64
```

- *Type:* *f64

---

##### `MaxCustomOnDemandRetentionDays`<sup>Required</sup> <a name="MaxCustomOnDemandRetentionDays" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.maxCustomOnDemandRetentionDays"></a>

```go
func MaxCustomOnDemandRetentionDays() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `SupportedResourceTypes`<sup>Required</sup> <a name="SupportedResourceTypes" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.supportedResourceTypes"></a>

```go
func SupportedResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `BackupPlanIdInput`<sup>Optional</sup> <a name="BackupPlanIdInput" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.backupPlanIdInput"></a>

```go
func BackupPlanIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `BackupPlanId`<sup>Required</sup> <a name="BackupPlanId" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.backupPlanId"></a>

```go
func BackupPlanId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBackupDrBackupPlanBackupRules <a name="DataGoogleBackupDrBackupPlanBackupRules" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrbackupplan"

&datagooglebackupdrbackupplan.DataGoogleBackupDrBackupPlanBackupRules {

}
```


### DataGoogleBackupDrBackupPlanBackupRulesStandardSchedule <a name="DataGoogleBackupDrBackupPlanBackupRulesStandardSchedule" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrbackupplan"

&datagooglebackupdrbackupplan.DataGoogleBackupDrBackupPlanBackupRulesStandardSchedule {

}
```


### DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow <a name="DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrbackupplan"

&datagooglebackupdrbackupplan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow {

}
```


### DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth <a name="DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrbackupplan"

&datagooglebackupdrbackupplan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth {

}
```


### DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanProperties <a name="DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanProperties" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrbackupplan"

&datagooglebackupdrbackupplan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanProperties {

}
```


### DataGoogleBackupDrBackupPlanConfig <a name="DataGoogleBackupDrBackupPlanConfig" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrbackupplan"

&datagooglebackupdrbackupplan.DataGoogleBackupDrBackupPlanConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BackupPlanId: *string,
	Location: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.backupPlanId">BackupPlanId</a></code> | <code>*string</code> | The ID of the backup plan. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.location">Location</a></code> | <code>*string</code> | The location for the backup plan. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_backup_dr_backup_plan#id DataGoogleBackupDrBackupPlan#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_backup_dr_backup_plan#project DataGoogleBackupDrBackupPlan#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupPlanId`<sup>Required</sup> <a name="BackupPlanId" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.backupPlanId"></a>

```go
BackupPlanId *string
```

- *Type:* *string

The ID of the backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_backup_dr_backup_plan#backup_plan_id DataGoogleBackupDrBackupPlan#backup_plan_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_backup_dr_backup_plan#location DataGoogleBackupDrBackupPlan#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_backup_dr_backup_plan#id DataGoogleBackupDrBackupPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_backup_dr_backup_plan#project DataGoogleBackupDrBackupPlan#project}.

---

### DataGoogleBackupDrBackupPlanDiskBackupPlanProperties <a name="DataGoogleBackupDrBackupPlanDiskBackupPlanProperties" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrbackupplan"

&datagooglebackupdrbackupplan.DataGoogleBackupDrBackupPlanDiskBackupPlanProperties {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBackupDrBackupPlanBackupRulesList <a name="DataGoogleBackupDrBackupPlanBackupRulesList" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrbackupplan"

datagooglebackupdrbackupplan.NewDataGoogleBackupDrBackupPlanBackupRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrBackupPlanBackupRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrBackupPlanBackupRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrBackupPlanBackupRulesOutputReference <a name="DataGoogleBackupDrBackupPlanBackupRulesOutputReference" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrbackupplan"

datagooglebackupdrbackupplan.NewDataGoogleBackupDrBackupPlanBackupRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrBackupPlanBackupRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.property.backupRetentionDays">BackupRetentionDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.property.ruleId">RuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.property.standardSchedule">StandardSchedule</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList">DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRules">DataGoogleBackupDrBackupPlanBackupRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupRetentionDays`<sup>Required</sup> <a name="BackupRetentionDays" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.property.backupRetentionDays"></a>

```go
func BackupRetentionDays() *f64
```

- *Type:* *f64

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.property.ruleId"></a>

```go
func RuleId() *string
```

- *Type:* *string

---

##### `StandardSchedule`<sup>Required</sup> <a name="StandardSchedule" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.property.standardSchedule"></a>

```go
func StandardSchedule() DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList">DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrBackupPlanBackupRules
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRules">DataGoogleBackupDrBackupPlanBackupRules</a>

---


### DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList <a name="DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrbackupplan"

datagooglebackupdrbackupplan.NewDataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference <a name="DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrbackupplan"

datagooglebackupdrbackupplan.NewDataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.endHourOfDay">EndHourOfDay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.startHourOfDay">StartHourOfDay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow">DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndHourOfDay`<sup>Required</sup> <a name="EndHourOfDay" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.endHourOfDay"></a>

```go
func EndHourOfDay() *f64
```

- *Type:* *f64

---

##### `StartHourOfDay`<sup>Required</sup> <a name="StartHourOfDay" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.startHourOfDay"></a>

```go
func StartHourOfDay() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow">DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow</a>

---


### DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList <a name="DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrbackupplan"

datagooglebackupdrbackupplan.NewDataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference <a name="DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrbackupplan"

datagooglebackupdrbackupplan.NewDataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.backupWindow">BackupWindow</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList">DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfMonth">DaysOfMonth</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.hourlyFrequency">HourlyFrequency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.months">Months</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.recurrenceType">RecurrenceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.weekDayOfMonth">WeekDayOfMonth</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList">DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardSchedule">DataGoogleBackupDrBackupPlanBackupRulesStandardSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupWindow`<sup>Required</sup> <a name="BackupWindow" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.backupWindow"></a>

```go
func BackupWindow() DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList">DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList</a>

---

##### `DaysOfMonth`<sup>Required</sup> <a name="DaysOfMonth" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfMonth"></a>

```go
func DaysOfMonth() *[]*f64
```

- *Type:* *[]*f64

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfWeek"></a>

```go
func DaysOfWeek() *[]*string
```

- *Type:* *[]*string

---

##### `HourlyFrequency`<sup>Required</sup> <a name="HourlyFrequency" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.hourlyFrequency"></a>

```go
func HourlyFrequency() *f64
```

- *Type:* *f64

---

##### `Months`<sup>Required</sup> <a name="Months" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.months"></a>

```go
func Months() *[]*string
```

- *Type:* *[]*string

---

##### `RecurrenceType`<sup>Required</sup> <a name="RecurrenceType" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.recurrenceType"></a>

```go
func RecurrenceType() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `WeekDayOfMonth`<sup>Required</sup> <a name="WeekDayOfMonth" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.weekDayOfMonth"></a>

```go
func WeekDayOfMonth() DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList">DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrBackupPlanBackupRulesStandardSchedule
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardSchedule">DataGoogleBackupDrBackupPlanBackupRulesStandardSchedule</a>

---


### DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList <a name="DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrbackupplan"

datagooglebackupdrbackupplan.NewDataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference <a name="DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrbackupplan"

datagooglebackupdrbackupplan.NewDataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.weekOfMonth">WeekOfMonth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth">DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `WeekOfMonth`<sup>Required</sup> <a name="WeekOfMonth" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.weekOfMonth"></a>

```go
func WeekOfMonth() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth">DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth</a>

---


### DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList <a name="DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrbackupplan"

datagooglebackupdrbackupplan.NewDataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference <a name="DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrbackupplan"

datagooglebackupdrbackupplan.NewDataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.property.guestFlush">GuestFlush</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanProperties">DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GuestFlush`<sup>Required</sup> <a name="GuestFlush" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.property.guestFlush"></a>

```go
func GuestFlush() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanProperties
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanProperties">DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanProperties</a>

---


### DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList <a name="DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrbackupplan"

datagooglebackupdrbackupplan.NewDataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference <a name="DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglebackupdrbackupplan"

datagooglebackupdrbackupplan.NewDataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.property.guestFlush">GuestFlush</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanProperties">DataGoogleBackupDrBackupPlanDiskBackupPlanProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GuestFlush`<sup>Required</sup> <a name="GuestFlush" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.property.guestFlush"></a>

```go
func GuestFlush() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrBackupPlanDiskBackupPlanProperties
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanProperties">DataGoogleBackupDrBackupPlanDiskBackupPlanProperties</a>

---



