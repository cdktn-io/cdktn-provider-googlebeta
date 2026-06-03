# `dataGoogleComputeBackendBucketIamPolicy` Submodule <a name="`dataGoogleComputeBackendBucketIamPolicy` Submodule" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeBackendBucketIamPolicy <a name="DataGoogleComputeBackendBucketIamPolicy" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_compute_backend_bucket_iam_policy google_compute_backend_bucket_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglecomputebackendbucketiampolicy"

datagooglecomputebackendbucketiampolicy.NewDataGoogleComputeBackendBucketIamPolicy(scope Construct, id *string, config DataGoogleComputeBackendBucketIamPolicyConfig) DataGoogleComputeBackendBucketIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicyConfig">DataGoogleComputeBackendBucketIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicyConfig">DataGoogleComputeBackendBucketIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeBackendBucketIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglecomputebackendbucketiampolicy"

datagooglecomputebackendbucketiampolicy.DataGoogleComputeBackendBucketIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglecomputebackendbucketiampolicy"

datagooglecomputebackendbucketiampolicy.DataGoogleComputeBackendBucketIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglecomputebackendbucketiampolicy"

datagooglecomputebackendbucketiampolicy.DataGoogleComputeBackendBucketIamPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglecomputebackendbucketiampolicy"

datagooglecomputebackendbucketiampolicy.DataGoogleComputeBackendBucketIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleComputeBackendBucketIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleComputeBackendBucketIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleComputeBackendBucketIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_compute_backend_bucket_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeBackendBucketIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeBackendBucketIamPolicyConfig <a name="DataGoogleComputeBackendBucketIamPolicyConfig" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/datagooglecomputebackendbucketiampolicy"

&datagooglecomputebackendbucketiampolicy.DataGoogleComputeBackendBucketIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_compute_backend_bucket_iam_policy#name DataGoogleComputeBackendBucketIamPolicy#name}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_compute_backend_bucket_iam_policy#id DataGoogleComputeBackendBucketIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_compute_backend_bucket_iam_policy#project DataGoogleComputeBackendBucketIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_compute_backend_bucket_iam_policy#name DataGoogleComputeBackendBucketIamPolicy#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_compute_backend_bucket_iam_policy#id DataGoogleComputeBackendBucketIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.dataGoogleComputeBackendBucketIamPolicy.DataGoogleComputeBackendBucketIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_compute_backend_bucket_iam_policy#project DataGoogleComputeBackendBucketIamPolicy#project}.

---



