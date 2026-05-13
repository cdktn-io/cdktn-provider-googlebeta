# `googleIapWebRegionForwardingRuleServiceIamPolicy` Submodule <a name="`googleIapWebRegionForwardingRuleServiceIamPolicy` Submodule" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIapWebRegionForwardingRuleServiceIamPolicy <a name="GoogleIapWebRegionForwardingRuleServiceIamPolicy" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_policy google_iap_web_region_forwarding_rule_service_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIapWebRegionForwardingRuleServiceIamPolicy(Construct Scope, string Id, GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig">GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig">GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIapWebRegionForwardingRuleServiceIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleIapWebRegionForwardingRuleServiceIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleIapWebRegionForwardingRuleServiceIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleIapWebRegionForwardingRuleServiceIamPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleIapWebRegionForwardingRuleServiceIamPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleIapWebRegionForwardingRuleServiceIamPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIapWebRegionForwardingRuleServiceIamPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIapWebRegionForwardingRuleServiceIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIapWebRegionForwardingRuleServiceIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.forwardingRuleRegionServiceNameInput">ForwardingRuleRegionServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.forwardingRuleRegionServiceName">ForwardingRuleRegionServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ForwardingRuleRegionServiceNameInput`<sup>Optional</sup> <a name="ForwardingRuleRegionServiceNameInput" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.forwardingRuleRegionServiceNameInput"></a>

```csharp
public string ForwardingRuleRegionServiceNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.policyDataInput"></a>

```csharp
public string PolicyDataInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ForwardingRuleRegionServiceName`<sup>Required</sup> <a name="ForwardingRuleRegionServiceName" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.forwardingRuleRegionServiceName"></a>

```csharp
public string ForwardingRuleRegionServiceName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig <a name="GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ForwardingRuleRegionServiceName,
    string PolicyData,
    string Id = null,
    string Project = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig.property.forwardingRuleRegionServiceName">ForwardingRuleRegionServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_policy#forwarding_rule_region_service_name GoogleIapWebRegionForwardingRuleServiceIamPolicy#forwarding_rule_region_service_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_policy#policy_data GoogleIapWebRegionForwardingRuleServiceIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_policy#id GoogleIapWebRegionForwardingRuleServiceIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_policy#project GoogleIapWebRegionForwardingRuleServiceIamPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_policy#region GoogleIapWebRegionForwardingRuleServiceIamPolicy#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ForwardingRuleRegionServiceName`<sup>Required</sup> <a name="ForwardingRuleRegionServiceName" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig.property.forwardingRuleRegionServiceName"></a>

```csharp
public string ForwardingRuleRegionServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_policy#forwarding_rule_region_service_name GoogleIapWebRegionForwardingRuleServiceIamPolicy#forwarding_rule_region_service_name}.

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig.property.policyData"></a>

```csharp
public string PolicyData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_policy#policy_data GoogleIapWebRegionForwardingRuleServiceIamPolicy#policy_data}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_policy#id GoogleIapWebRegionForwardingRuleServiceIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_policy#project GoogleIapWebRegionForwardingRuleServiceIamPolicy#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamPolicy.GoogleIapWebRegionForwardingRuleServiceIamPolicyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_policy#region GoogleIapWebRegionForwardingRuleServiceIamPolicy#region}.

---



